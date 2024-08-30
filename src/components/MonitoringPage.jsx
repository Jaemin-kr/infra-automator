import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bell, Search, Activity } from 'lucide-react';

const FeaturePreview = ({ icon: Icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Icon className="h-6 w-6" />
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const MonitoringPage = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscription email:', email);
    alert('감사합니다! 기능이 준비되면 알려드리겠습니다.');
    setEmail('');
  };

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">모니터링 및 로깅 (준비 중)</h1>
      
      <Alert variant="info" className="mb-8">
        <Activity className="h-4 w-4" />
        <AlertDescription>
          이 기능은 현재 개발 중이며 곧 제공될 예정입니다. 모니터링 및 로깅 기능이 출시되면 
          시스템 성능을 실시간으로 모니터링하고 로그를 분석할 수 있게 됩니다.
        </AlertDescription>
      </Alert>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">주요 기능 미리보기</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <FeaturePreview
            icon={BarChart}
            title="실시간 성능 모니터링"
            description="시스템 및 애플리케이션 성능을 실시간으로 추적하고 시각화합니다."
          />
          <FeaturePreview
            icon={Search}
            title="로그 분석"
            description="중앙 집중식 로그 수집 및 고급 검색 기능으로 문제를 신속하게 파악합니다."
          />
          <FeaturePreview
            icon={Bell}
            title="알림 관리"
            description="중요한 이벤트 발생 시 즉시 알림을 받아 신속하게 대응할 수 있습니다."
          />
          <FeaturePreview
            icon={Activity}
            title="커스텀 대시보드"
            description="필요한 정보만 모아 개인화된 대시보드를 구성할 수 있습니다."
          />
        </div>
      </section>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">업데이트 알림 신청</h2>
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit">신청하기</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

export default MonitoringPage;