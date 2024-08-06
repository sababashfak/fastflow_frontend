import { upload } from "@/api/upload";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useStore, { TStore } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useMemo, useState } from "react";

type ProfileImageProps = {
  image: string;
  setAvatarImage: (avatar: string) => void;
  isUpdating: boolean;
};

const ProfileImage: React.FC<ProfileImageProps> = ({
  image,
  setAvatarImage,
  isUpdating,
}) => {
  const [blob, setBlob] = useState<string | null>(null);
  const [avatar, setAvatar] = useState<string | null>(image);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);

  const queryClient = useQueryClient();

  const imageUpdateMutation = useMutation({
    mutationFn: upload,
    onSuccess: (result) => {
      if (result.success) {
        if (result.data?.file) {
          const photo = result.data.file.filename;

          setUser({ ...user, avatar: photo } as TStore["user"]);

          queryClient.invalidateQueries({
            queryKey: ["user", "me"],
          });

          setAvatarImage(photo);
          setAvatar(photo);
          setBlob(null);
        }
      }
    },
  });

  const handleImageUpdate = (file: File) => {
    if (file) {
      setBlob(URL.createObjectURL(file));

      const formData = new FormData();
      formData.append("file", file);

      imageUpdateMutation.mutate(formData);
    }
  };

  const displayImage = useMemo(() => {
    if (blob) {
      return blob;
    }

    if (avatar) {
      return `${import.meta.env.VITE_BACKEND_URL}/images/${avatar}`;
    }

    return "/avatar.png";
  }, [blob, avatar]);

  return (
    <div>
      <img
        className="mx-auto mb-5 mt-2 size-40 rounded-full object-cover"
        src={displayImage}
        alt="Avatar"
      />
      <div className="mb-3">
        <Label className="mb-2 block">Profile Image</Label>
        <Input
          className="h-auto cursor-pointer py-2.5 text-[15px]"
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files.length) {
              handleImageUpdate(e.target.files[0]);
            }
          }}
          disabled={imageUpdateMutation.isPending || isUpdating}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
