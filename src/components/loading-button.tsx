import { Button } from "@/components/ui/button";

export default function LoadingButton({
  pending,
  text,
  loadingText,
}: {
  pending: boolean;
  text: string;
  loadingText: string;
}) {
  return (
    <Button className="w-full" type="submit" disabled={pending}>
      {pending ? (loadingText ?? "Please wait...") : text}
    </Button>
  );
}
