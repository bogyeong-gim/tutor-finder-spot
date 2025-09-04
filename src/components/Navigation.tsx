import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-8">
              <a href="/" className="font-medium text-neutral-600 hover:text-primary cursor-pointer">모집중인 공고</a>
              <span className="font-medium text-neutral-600">마감한 공고</span>
              <span className="font-medium text-neutral-600">강사 목록</span>
              <span className="font-medium text-neutral-600">찜한 강사</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;