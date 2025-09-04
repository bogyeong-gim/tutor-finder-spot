import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Proposal {
  id: string;
  teacherName: string;
  experience: string;
  message: string;
  proposedFee: string;
  rating: number;
}

const ProposalList = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 샘플 제안 데이터
  const proposals: Proposal[] = [
    {
      id: "1",
      teacherName: "김강사",
      experience: "5년",
      message: "바이브코딩 전문가로서 실무 중심의 MVP 개발 과정을 진행하겠습니다. 다수의 스타트업 MVP 개발 경험을 바탕으로 실용적인 커리큘럼을 제공하겠습니다.",
      proposedFee: "500만원",
      rating: 4.8
    },
    {
      id: "2",
      teacherName: "이개발",
      experience: "8년",
      message: "노코드 툴을 활용한 빠른 MVP 제작 노하우를 전수하겠습니다. 기획부터 배포까지 전 과정을 실습 위주로 진행하여 실무 역량을 키우실 수 있습니다.",
      proposedFee: "450만원",
      rating: 4.9
    },
    {
      id: "3",
      teacherName: "박프로",
      experience: "3년",
      message: "최신 트렌드를 반영한 MVP 개발 방법론을 알려드리겠습니다. 학습자 맞춤형 커리큘럼으로 진행하며, 프로젝트 완성도를 높이는데 집중하겠습니다.",
      proposedFee: "400만원",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">받은 제안 목록</h2>
          <Button 
            variant="outline"
            className="border-border text-neutral-700 hover:bg-neutral-50"
            onClick={() => navigate('/')}
          >
            목록으로
          </Button>
        </div>

        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">공고 정보</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-foreground">[서울] 바이브코딩으로 만드는 MVP 제작</p>
              <Badge className="mt-2 bg-success text-success-foreground">생성형 AI</Badge>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          {proposals.map((proposal) => (
            <Card key={proposal.id} className="border-border">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{proposal.teacherName}</CardTitle>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary">경력 {proposal.experience}</Badge>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-medium">{proposal.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">제안 메시지</h4>
                  <div className="p-4 bg-neutral-50 rounded-md">
                    <p className="text-neutral-700">{proposal.message}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-neutral-600">제안 강사료: </span>
                    <span className="font-medium text-lg">{proposal.proposedFee}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-border text-neutral-700 hover:bg-neutral-50"
                    >
                      프로필 보기
                    </Button>
                    <Button 
                      variant="default" 
                      size="sm"
                    >
                      제안 수락
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProposalList;