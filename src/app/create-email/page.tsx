"use client";

import { useState } from "react";
import { Plus, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import EmailSectionCard from "@/components/emailCreator/emailSectionCard";

import { IEmailData } from "@/types/createEmailTypes";
import { IEmailSection } from "@/types/createEmailTypes";
import TabsSwitcher from "@/components/emailCreator/tabsSwitcher";
import { EmailPreview } from "@/components/emailCreator/emailPreview";

export default function EmailCreator() {
  const [emailData, setEmailData] = useState<IEmailData>({
    title: "",
    preheader: "",
    sections: [
      {
        id: "1",
        imageUrl: "",
        redirectUrl: "https://marcus-portfolio-lac.vercel.app/",
        altText: "",
      },
    ],
  });

  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">(
    "desktop"
  );

  // Função para adicionar nova seção
  const addSection = () => {
    const newSection: IEmailSection = {
      id: crypto.randomUUID(),
      imageUrl: "",
      redirectUrl: "",
      altText: "",
    };

    setEmailData((prev) => ({
      ...prev,
      sections: [...prev.sections, newSection],
    }));
  };

  // Função para atualizar uma seção
  const updateSection = (id: string, data: Partial<IEmailSection>) => {
    setEmailData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === id ? { ...section, ...data } : section
      ),
    }));
  };

  // Função para remover uma seção
  const removeSection = (id: string) => {
    setEmailData((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== id),
    }));
  };

  // Função para mover seção
  const moveSection = (id: string, direction: "up" | "down") => {
    const sectionIndex = emailData.sections.findIndex(
      (section) => section.id === id
    );
    if (sectionIndex === -1) return;

    const newSections = [...emailData.sections];
    const newIndex = direction === "up" ? sectionIndex - 1 : sectionIndex + 1;

    if (newIndex >= 0 && newIndex < newSections.length) {
      [newSections[sectionIndex], newSections[newIndex]] = [
        newSections[newIndex],
        newSections[sectionIndex],
      ];

      setEmailData((prev) => ({ ...prev, sections: newSections }));
    }
  };

  // Função para gerar o HTML do email
  // const generateEmailHtml = () => {
  //   const sectionsHtml = emailData.sections
  //     .map(
  //       (section) => `
  //     <tr>
  //       <td style="padding: 0; text-align: center">
  //         ${
  //           section.redirectUrl
  //             ? `<a href="${section.redirectUrl}" target="_blank">`
  //             : ""
  //         }
  //           <img
  //             src="${section.imageUrl}"
  //             width="${section.width}"
  //             alt="${section.altText}"
  //             style="width: 100%; max-width: ${
  //               section.width
  //             }px; height: auto; display: block; border: 0;"
  //             class="fluid"
  //           />
  //         ${section.redirectUrl ? "</a>" : ""}
  //       </td>
  //     </tr>
  //   `
  //     )
  //     .join("");

  //   // Aqui você pode usar o template do primeiro artefato e substituir as variáveis
  //   // Implementar a lógica de download do ZIP com as imagens
  // };

  const handlePreviewModeChange = (value: string) => {
    if (value === "desktop" || value === "mobile") {
      setPreviewMode(value);
    }
  };

  return (
    <div className="container mx-auto mt-5 py-6 max-w-7xl h-[700px] max-h-[700px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Criar Novo Email</h2>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          {/* <Button variant="outline">
            <Save className="w-4 h-4 mr-2" />
            Salvar
          </Button> */}
        </div>
      </div>

      <div className="grid grid-cols-6 gap-6">
        {/* Painel de Edição */}
        <Card className="col-span-2 h-[700px]">
          <CardHeader>
            <CardTitle>Configurações do Email</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Configurações Gerais */}
              <div className="space-y-4">
                <div>
                  <Label>Título do Email</Label>
                  <Input
                    value={emailData.title}
                    onChange={(e) =>
                      setEmailData((prev) => ({
                        ...prev,
                        title: e.target.value,
                      }))
                    }
                    placeholder="Digite o título do email"
                  />
                </div>
                <div>
                  <Label>Preheader</Label>
                  <Textarea
                    value={emailData.preheader}
                    onChange={(e) =>
                      setEmailData((prev) => ({
                        ...prev,
                        preheader: e.target.value,
                      }))
                    }
                    placeholder="Texto que aparece na prévia do email"
                  />
                </div>
                <div>
                </div>
              </div>

              {/* Seções */}
              <div>
                <div className="flex items-center justify-between pb-4">
                <Label>Seções</Label>
                <Button
                    variant="secondary"
                    className="w-auto"
                    onClick={addSection}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Adicionar
                  </Button>
                </div>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-6">
                    {emailData.sections.map((section, index) => (
                      <EmailSectionCard
                        key={section.id}
                        index={index}
                        section={section}
                        moveSection={moveSection}
                        removeSection={removeSection}
                        updateSection={updateSection}
                      />
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Preview */}
        <div className="col-span-4 space-y-4">
          <Card className="h-[700px]">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <TabsSwitcher
                previewMode={previewMode}
                handlePreviewModeChange={handlePreviewModeChange}
              >
                <ScrollArea className="h-[500px]">
                  <EmailPreview
                    sections={emailData.sections}
                    previewMode={previewMode}
                  />
                </ScrollArea>
              </TabsSwitcher>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
