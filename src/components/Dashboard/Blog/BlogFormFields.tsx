import { getCategories, getTags } from "@/api/blog";
import FancyMultiSelect from "@/components/shared/FancyMultiSelect";
import ImageUpload from "@/components/shared/ImageUpload";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import TiptapEditor from "./TiptapEditor";

interface BlogFormFieldsProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  featuredImage: string;
  setFeaturedImage: React.Dispatch<React.SetStateAction<string>>;
  isUploading: boolean;
  setIsUploading: React.Dispatch<React.SetStateAction<boolean>>;
  tags: Selectable[];
  setTags: React.Dispatch<React.SetStateAction<Selectable[]>>;
  categories: Selectable[];
  setCategories: React.Dispatch<React.SetStateAction<Selectable[]>>;
  isUpdate: boolean;
}

const BlogFormFields: React.FC<BlogFormFieldsProps> = ({
  title,
  setTitle,
  content,
  setContent,
  featuredImage,
  setFeaturedImage,
  isUploading,
  setIsUploading,
  tags,
  setTags,
  categories,
  setCategories,
  isUpdate,
}) => {
  const tagsQuery = useQuery({
    queryKey: ["tags"],
    queryFn: getTags,
  });

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const selectableTags = tagsQuery.data?.data?.tags || [];
  const selectableCategories = categoriesQuery.data?.data?.categories || [];

  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-5 rounded-md bg-white p-4 sm:p-8 xl:grid-cols-[1fr_auto]">
      <div className="space-y-5">
        <div>
          <h3 className="mb-2 text-sm font-medium">Title</h3>
          <Input
            placeholder={"Enter blog title"}
            type={"text"}
            className="focus:border-blue/60 px-[15px] py-[22px] text-[15px] transition-colors placeholder:text-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium">Content</h3>
          <TiptapEditor content={content} setContent={setContent} />
        </div>
      </div>
      <div className="sidebar w-full space-y-5 xl:min-w-[300px] 2xl:w-[400px]">
        <div className="max-w-[400px]">
          <h3 className="mb-2 text-sm font-medium">Featured Image</h3>
          <ImageUpload
            isUpdate={isUpdate}
            updateNote="Don't upload a new image if you don't want to change the current one"
            photo={featuredImage}
            isRequired={!isUpdate}
            onImageUpload={setFeaturedImage}
            imageId="featuredImage"
            isUploading={isUploading}
            setIsUploading={setIsUploading}
            customStyles={{
              wrapper: "w-full aspect-[3/2]",
            }}
          />
        </div>
        <div className="w-full max-w-[400px]">
          <h3 className="mb-2 text-sm font-medium">Tags</h3>
          {!tagsQuery.isFetching ? (
            <FancyMultiSelect
              selected={tags}
              setSelected={setTags}
              initialSelectables={selectableTags.map((tag: string) => ({
                label: tag,
                value: tag,
              }))}
              placeholderText="Add tags (optional)"
            />
          ) : (
            <Skeleton className="flex h-12 w-full items-center justify-center text-sm text-gray-500">
              Fetching tags...
            </Skeleton>
          )}
        </div>
        <div className="w-full max-w-[400px]">
          <h3 className="mb-2 text-sm font-medium">Categories</h3>
          {!categoriesQuery.isFetching ? (
            <FancyMultiSelect
              selected={categories}
              setSelected={setCategories}
              initialSelectables={selectableCategories.map(
                (cartegory: string) => ({
                  label: cartegory,
                  value: cartegory,
                }),
              )}
              placeholderText="Add categories"
            />
          ) : (
            <Skeleton className="flex h-12 w-full items-center justify-center text-sm text-gray-500">
              Fetching categories...
            </Skeleton>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogFormFields;
