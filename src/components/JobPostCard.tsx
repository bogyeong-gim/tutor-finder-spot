import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface JobPostCardProps {
  title: string;
  location: string;
  subject: string;
  tag: string;
  isActive?: boolean;
}

const JobPostCard = ({ 
  title, 
  location, 
  subject, 
  tag, 
  isActive = false 
}: JobPostCardProps) => {
  return (
    <Card className="w-full max-w-sm border-border bg-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium text-foreground leading-tight">
          [{location}] {subject} {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Badge 
          variant="default" 
          className="bg-success text-success-foreground hover:bg-success/90"
        >
          {tag}
        </Badge>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm"
            className="border-border text-neutral-700 hover:bg-neutral-50"
          >
            공고 보기
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-border text-neutral-700 hover:bg-neutral-50"
          >
            공고 수정
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="border-border text-neutral-700 hover:bg-neutral-50"
          >
            발표 제안 확인
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobPostCard;