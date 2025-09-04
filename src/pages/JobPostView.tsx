import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const JobPostView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">공고 상세보기</h2>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              className="border-border text-neutral-700 hover:bg-neutral-50"
              onClick={() => navigate(`/job-post/${id}/edit`)}
            >
              공고 수정
            </Button>
            <Button 
              variant="outline"
              className="border-border text-neutral-700 hover:bg-neutral-50"
              onClick={() => navigate('/')}
            >
              목록으로
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          {/* 강의 제목 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 제목</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-neutral-50 rounded-md">
                <p className="font-medium">바이브컨퍼런스 올솔 MVP 제작</p>
              </div>
            </CardContent>
          </Card>

          {/* 강의 분야 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 분야</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">IT</Badge>
                <Badge variant="secondary">AI 인공지능</Badge>
                <Badge variant="secondary">마케팅/글쓰기</Badge>
                <Badge variant="secondary">빅데이터</Badge>
                <Badge variant="secondary">데이터 사이언스</Badge>
                <Badge variant="secondary">블록체인</Badge>
                <Badge variant="secondary">자연어처리</Badge>
                <Badge variant="secondary">클라우드</Badge>
                <Badge variant="secondary">SW개발</Badge>
                <Badge variant="secondary">생성형 AI</Badge>
              </div>
            </CardContent>
          </Card>

          {/* 강의 주제 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 주제</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-neutral-50 rounded-md">
                <p className="font-medium">바이브컨퍼런스 올솔 MVP 제작</p>
              </div>
            </CardContent>
          </Card>

          {/* 진행 방식 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">진행 방식</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Badge className="bg-primary text-primary-foreground">온라인</Badge>
                <Badge variant="outline">오프라인</Badge>
              </div>
            </CardContent>
          </Card>

          {/* 강의 예상 일정 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 예상 일정</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">시작일:</span>
                  <span className="font-medium">2025-09-18</span>
                </div>
                <span className="text-neutral-400">~</span>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-600">종료일:</span>
                  <span className="font-medium">2025-09-23</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="rounded" />
                  <span className="text-sm text-neutral-600">협의가능</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 강의 시간 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 시간</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-neutral-50 rounded-md">
                <p className="font-medium">10시간</p>
              </div>
            </CardContent>
          </Card>

          {/* 강사료 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강사료</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <select className="px-3 py-2 border border-border rounded-md bg-background">
                  <option value="기준">기준</option>
                </select>
                <span className="font-medium">만원</span>
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="rounded" />
                  <span className="text-sm text-neutral-600">협의가능</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 강의 위치 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 위치</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-neutral-50 rounded-md">
                <p className="font-medium">서울</p>
              </div>
            </CardContent>
          </Card>

          {/* 강의 인원 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 인원 (선택)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-neutral-50 rounded-md">
                <p className="font-medium">25명</p>
              </div>
            </CardContent>
          </Card>

          {/* 추가 요청사항 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">추가 요청사항 (선택)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-neutral-50 rounded-md min-h-[120px]">
                <p className="text-neutral-700">커리큘럼을 협의를 통해 커스터마이징 해주세요.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default JobPostView;