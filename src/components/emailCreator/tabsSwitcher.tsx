import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface Props {
  previewMode: string;
  handlePreviewModeChange: (value: string) => void;
  children: ReactNode;
}

export default function TabsSwitcher({
  previewMode,
  handlePreviewModeChange,
  children,
}: Props) {
  return (
    <Tabs value={previewMode} onValueChange={handlePreviewModeChange}>
      <TabsList className="mb-4 border">
        <TabsTrigger value="desktop">Desktop</TabsTrigger>
        <TabsTrigger value="mobile">Mobile</TabsTrigger>
      </TabsList>
      <TabsContent value="desktop" className="mt-0">
        <div className="min-h-[200px] overflow-auto p-4">
          {children}
        </div>
      </TabsContent>
      <TabsContent value="mobile" className="mt-0">
        <div className="min-h-[200px] overflow-auto p-4">
          {children}
        </div>
      </TabsContent>
    </Tabs>
  );
}
