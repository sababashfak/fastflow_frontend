import {
  createComment,
  getCommentsByBlogId,
  updateComment,
} from "@/api/comment";
import useStore from "@/store";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { Textarea } from "../ui/textarea";
import CommentCard from "./CommentCard";

interface BlogCommentsProps {
  blogId: string;
}

const BlogComments: React.FC<BlogCommentsProps> = ({ blogId }) => {
  const user = useStore((state) => state.user);
  const [commentUpdateId, setCommentUpdateId] = useState("");
  const [commentInput, setCommentInput] = useState("");

  const commentsQuery = useQuery({
    queryKey: ["comments", { blogId }],
    queryFn: () =>
      getCommentsByBlogId(blogId, {
        populate: "user:name",
      }),
    enabled: !!blogId,
    placeholderData: keepPreviousData,
  });

  const comments = commentsQuery.data?.data?.comments || [];

  const queryClient = useQueryClient();

  const commentMutation = useMutation({
    mutationFn: (commentData: any) => {
      if (commentUpdateId) {
        return updateComment(commentUpdateId, commentData);
      }

      return createComment(commentData);
    },
    onSuccess: (result) => {
      if (result.success) {
        queryClient.invalidateQueries({
          queryKey: ["comments", { blogId }],
        });

        if (commentUpdateId) {
          toast.success("Comment updated successfully");
          setCommentUpdateId("");
        } else {
          toast.success("Comment added successfully");
        }

        setCommentInput("");
      } else {
        toast.error(result.message || "Failed to comment");
      }
    },
  });

  const handleComment = () => {
    const commentData = {
      blog: blogId,
      content: commentInput,
    };

    commentMutation.mutate(commentData);
  };

  return (
    <div className="mt-3 rounded-lg bg-white p-4 sm:p-6 md:px-10 md:py-8">
      <h4 className="mb-5 text-xl font-semibold md:text-2xl">Comments</h4>
      {user?._id ? (
        <div id="comment-input" className="flex flex-col items-end gap-4">
          <Textarea
            placeholder={"Write something..."}
            className="focus:border-blue/60 min-h-[115px] w-full px-[15px] py-[10px] text-[15px] transition-colors placeholder:text-gray-400"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            disabled={commentMutation.isPending}
          />
          <div className="flex items-center gap-2">
            <Button
              disabled={!commentInput || commentMutation.isPending}
              size="lg"
              variant="outline"
              onClick={() => {
                setCommentInput("");
                setCommentUpdateId("");
              }}
            >
              Cancel
            </Button>
            <Button
              disabled={!commentInput || commentMutation.isPending}
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
              onClick={handleComment}
            >
              {commentMutation.isPending
                ? !commentUpdateId
                  ? "Commenting..."
                  : "Updating..."
                : !commentUpdateId
                  ? "Comment"
                  : "Update"}
            </Button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="rounded-md border p-5">
            You have to{" "}
            <Link className="text-blue-500 hover:underline" to="/login">
              Login
            </Link>{" "}
            first to comment
          </p>
        </div>
      )}
      <div className="mt-7 md:mt-10">
        {!commentsQuery.isFetching && comments?.length === 0 && (
          <p className="text-center text-sm text-gray-500">No comments found</p>
        )}
        {(!commentsQuery.isFetching || comments?.length > 0) && (
          <div className="flex flex-col gap-y-5">
            {comments.map((comment: any) => (
              <CommentCard
                key={comment._id}
                currentUserId={user?._id as string}
                comment={comment}
                commentUpdateId={commentUpdateId}
                setCommentUpdateId={setCommentUpdateId}
                setCommentInput={setCommentInput}
              />
            ))}
          </div>
        )}
        {commentsQuery.isFetching && !comments?.length && (
          <div className="mt-5 space-y-5">
            {[...Array(2)].map((_, ind) => (
              <div
                key={ind}
                className="rounded-md border border-gray-100/70 p-5"
              >
                <Skeleton className="mb-2 h-4 w-52" />
                <Skeleton className="mb-5 h-3 w-44" />
                <Skeleton className="h-12 w-full" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogComments;
