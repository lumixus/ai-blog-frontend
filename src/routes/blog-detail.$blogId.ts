import { createFileRoute } from "@tanstack/react-router";
import { BlogDetail } from "../pages/BlogDetail";

export const Route = createFileRoute("/blog-detail/$blogId")({
  component: BlogDetail,
}); 