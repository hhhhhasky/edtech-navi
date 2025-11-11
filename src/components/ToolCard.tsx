import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  name: string;
  description: string;
  link: string;
  tags?: string[];
  logo?: string;
}

const ToolCard = ({ name, description, link, tags, logo }: ToolCardProps) => {
  return (
    <div className="group bg-gradient-card border border-border rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-4">
        {logo && (
          <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-2xl">
            {logo}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {description}
          </p>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          <Button
            asChild
            size="sm"
            className="w-full sm:w-auto"
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              立即使用
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;
