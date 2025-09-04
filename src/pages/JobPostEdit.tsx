import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const JobPostEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: "바이브코딩으로 만드는 MVP 제작",
    subject: "바이브코딩으로 만드는 MVP 제작",
    format: "온라인",
    startDate: "2025-09-18",
    endDate: "2025-09-23",
    dateFlexible: true,
    hours: "10",
    paymentBase: "기준",
    paymentFlexible: true,
    location: "서울",
    capacity: "25",
    requirements: "커리큘럼을 협의를 통해 커스터마이징 해주세요."
  });

  const [selectedFields, setSelectedFields] = useState([
    "IT", "AI 인공지능", "마케팅/글쓰기", "빅데이터", "데이터 사이언스", 
    "블록체인", "자연어처리", "클라우드", "SW개발", "생성형 AI"
  ]);

  const availableFields = [
    "IT", "빅데이터", "AI 인공지능", "마케팅/글쓰기", "데이터 사이언스", 
    "블록체인", "자연어처리", "클라우드", "SW개발", "생성형 AI"
  ];

  const handleSave = () => {
    toast({
      title: "공고가 성공적으로 수정되었습니다",
      description: "변경사항이 저장되었습니다.",
    });
    navigate(`/job-post/${id}`);
  };

  const toggleField = (field: string) => {
    setSelectedFields(prev => 
      prev.includes(field) 
        ? prev.filter(f => f !== field)
        : [...prev, field]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-foreground">공고 수정</h2>
          <div className="flex gap-3">
            <Button 
              variant="outline"
              className="border-border text-neutral-700 hover:bg-neutral-50"
              onClick={() => navigate(`/job-post/${id}`)}
            >
              취소
            </Button>
            <Button 
              onClick={handleSave}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              저장
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
              <Input
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                placeholder="강의 제목을 입력하세요"
              />
            </CardContent>
          </Card>

          {/* 강의 분야 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 분야</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {availableFields.map((field) => (
                  <div key={field} className="flex items-center space-x-2">
                    <Checkbox
                      id={field}
                      checked={selectedFields.includes(field)}
                      onCheckedChange={() => toggleField(field)}
                    />
                    <label
                      htmlFor={field}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {field}
                    </label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 강의 주제 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 주제</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="강의 주제를 입력하세요"
              />
            </CardContent>
          </Card>

          {/* 진행 방식 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">진행 방식</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Button
                  variant={formData.format === "온라인" ? "default" : "outline"}
                  onClick={() => setFormData({...formData, format: "온라인"})}
                >
                  온라인
                </Button>
                <Button
                  variant={formData.format === "오프라인" ? "default" : "outline"}
                  onClick={() => setFormData({...formData, format: "오프라인"})}
                >
                  오프라인
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 강의 예상 일정 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 예상 일정</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-auto"
                  />
                </div>
                <span className="text-neutral-400">~</span>
                <div className="flex items-center gap-2">
                  <Input
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                    className="w-auto"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="dateFlexible"
                    checked={formData.dateFlexible}
                    onCheckedChange={(checked) => setFormData({...formData, dateFlexible: !!checked})}
                  />
                  <label htmlFor="dateFlexible" className="text-sm">협의가능</label>
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
              <Input
                value={formData.hours}
                onChange={(e) => setFormData({...formData, hours: e.target.value})}
                placeholder="시간 입력"
                className="w-32"
              />
            </CardContent>
          </Card>

          {/* 강사료 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강사료</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 flex-wrap">
                <select 
                  className="px-3 py-2 border border-border rounded-md bg-background"
                  value={formData.paymentBase}
                  onChange={(e) => setFormData({...formData, paymentBase: e.target.value})}
                >
                  <option value="기준">기준</option>
                  <option value="시간당">시간당</option>
                  <option value="일당">일당</option>
                </select>
                <span>만원</span>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="paymentFlexible"
                    checked={formData.paymentFlexible}
                    onCheckedChange={(checked) => setFormData({...formData, paymentFlexible: !!checked})}
                  />
                  <label htmlFor="paymentFlexible" className="text-sm">협의가능</label>
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
              <Input
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                placeholder="강의 위치를 입력하세요"
              />
            </CardContent>
          </Card>

          {/* 강의 인원 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">강의 인원 (선택)</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                value={formData.capacity}
                onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                placeholder="인원수를 입력하세요"
                className="w-32"
              />
            </CardContent>
          </Card>

          {/* 추가 요청사항 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">추가 요청사항 (선택)</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                value={formData.requirements}
                onChange={(e) => setFormData({...formData, requirements: e.target.value})}
                placeholder="추가 요청사항을 입력하세요"
                className="min-h-[120px]"
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default JobPostEdit;