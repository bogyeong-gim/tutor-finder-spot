import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-neutral-600 text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white">강구</h1>
            <span className="text-sm text-neutral-200">강사를 찾는 최신</span>
          </div>
          
          <nav className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              강사 찾기
            </Button>
            <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-white">
              강구 등록
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
            로그인
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
            아이디찾기
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
            강구FAQ
          </Button>
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 hover:text-white">
            고객센터
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;