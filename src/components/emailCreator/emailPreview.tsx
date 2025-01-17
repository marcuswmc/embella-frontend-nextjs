/* eslint-disable @next/next/no-img-element */
import { Skeleton } from "@/components/ui/skeleton";
import { IEmailSection } from "@/types/createEmailTypes";

interface IEmailPreview {
  sections: IEmailSection[];
  previewMode: string;
}

export function EmailPreview({ sections, previewMode }: IEmailPreview) {
  return (
    <div
      className={`overflow-hidden ${
        previewMode === "mobile" ? "w-[375px]" : "w-full"
      } mx-auto`}
    >
      {sections.map((section) => (
        <div
          key={section.id}
          className={`relative ${
            previewMode === "mobile"
              ? "w-[375px]"
              : "w-full max-w-[600px] mx-auto"
          }`}
        >
          {section.imageUrl ? (
            <img
              src={section.imageUrl}
              alt={section.altText || "Imagem sem descrição"}
              width={600}
              height={0}
              className="object-contain"
            />
          ) : (
            <div className="flex flex-col gap-4 pt-4">
              <Skeleton className="w-full h-[200px] rounded-md" />
              <div className="flex gap-4">
                <Skeleton className="w-full h-[200px] rounded-md" />
                <Skeleton className="w-full h-[200px] rounded-md" />
              </div>
            </div>
          )}
          {section.redirectUrl && (
            <div className="absolute inset-0 bg-blue-500/10 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" />
          )}
        </div>
      ))}

    </div>
  );
}
