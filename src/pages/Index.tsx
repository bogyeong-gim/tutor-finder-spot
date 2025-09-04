import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import JobPostCard from "@/components/JobPostCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">진행중인 공고</h2>
          <Button 
            variant="outline"
            className="border-border text-neutral-700 hover:bg-neutral-50"
          >
            새 모집공고 등록
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <JobPostCard
            location="서울"
            subject="인공지능 AI ChatGPT"
            title="활용 과정 모집 공고"
            tag="생성형 AI"
            isActive={true}
          />
          
          {/* Additional sample cards for demonstration */}
          <JobPostCard
            location="부산"
            subject="웹 개발"
            title="프론트엔드 강의 모집"
            tag="React"
            isActive={true}
          />
          
          <JobPostCard
            location="대전"
            subject="데이터 분석"
            title="Python 기초 과정"
            tag="데이터 사이언스"
            isActive={true}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;
