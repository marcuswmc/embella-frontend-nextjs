'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MoveUp, MoveDown, Trash2 } from "lucide-react";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible";

import { ChevronsUpDown } from "lucide-react";

interface EmailSection  {
  id: string;
  imageUrl: string;
  redirectUrl: string;
  altText: string;
};

interface Props {
  section: EmailSection;
  index: number;
  moveSection: (id: string, direction: "up" | "down") => void;
  removeSection: (id: string) => void;
  updateSection: (id: string, data: Partial<EmailSection>) => void;
};

export default function EmailSectionCard({
  section,
  index,
  moveSection,
  removeSection,
  updateSection,
}: Props) {
  return (
    <Card>
      <CardContent className="p-3">
        <Collapsible defaultOpen>
          <div className="flex justify-between items-center">
            <h3 className="font-medium">Seção {index + 1}</h3>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => moveSection(section.id, "up")}
                disabled={index === 0}
              >
                <MoveUp className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => moveSection(section.id, "down")}
              >
                <MoveDown className="w-4 h-4" />
              </Button>

              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                >
                  <ChevronsUpDown className="w-4 h-4" />
                </Button>
              </CollapsibleTrigger>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeSection(section.id)}
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <CollapsibleContent>
            <div className="space-y-4 mt-1">
              <div>
                <Label>URL da Imagem</Label>
                <Input
                  type="url"
                  value={section.imageUrl}
                  onChange={(e) =>
                    updateSection(section.id, {
                      imageUrl: e.target.value,
                    })
                  }
                  placeholder="https://exemplo.com/imagem.jpg"
                />
              </div>
              <div>
                <Label>Texto Alternativo</Label>
                <Input
                  value={section.altText}
                  onChange={(e) =>
                    updateSection(section.id, {
                      altText: e.target.value,
                    })
                  }
                  placeholder="Descrição da imagem"
                />
              </div>
              <div>
                <Label>Link de Redirecionamento</Label>
                <Input
                  value={section.redirectUrl}
                  onChange={(e) =>
                    updateSection(section.id, {
                      redirectUrl: e.target.value,
                    })
                  }
                  placeholder="https://exemplo.com/pagina"
                />
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
