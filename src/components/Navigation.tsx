import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-neutral-600">모집공고</span>
              <span className="font-medium text-neutral-600">직업</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-neutral-600">진행중인 공고</span>
            <span className="text-neutral-600">완료된 공고</span>
            <span className="text-neutral-600">임시 저장</span>
            <span className="text-neutral-600">원본 찾기</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;