import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Server, Settings, BarChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, path }) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="cursor-pointer transition-all hover:shadow-lg"
      onClick={() => navigate(path)}
    >
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Icon className="h-6 w-6" />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
        <div className="mt-4 flex items-center text-blue-600">
          <span className="mr-2">자세히 보기</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </CardContent>
    </Card>
  );
};

const HomePage = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold mb-4">인프라 관리 자동화 플랫폼</h1>
        <p className="text-xl text-muted-foreground">
          효율적이고 안정적인 IT 인프라 관리를 위한 최첨단 솔루션
        </p>
      </section>
      
      <section className="grid md:grid-cols-2 gap-6">
        <FeatureCard
          icon={Server}
          title="자동화된 프로비저닝"
          description="온프레미스 및 클라우드 환경에서 서버와 리소스를 자동으로 생성하고 관리합니다."
          path="/provisioning"
        />
        <FeatureCard
          icon={Settings}
          title="구성 관리"
          description="Ansible, Puppet, Chef 등을 활용하여 설정을 자동으로 배포하고 관리합니다."
          path="/configuration"
        />
      </section>
      
      <Alert>
        <BarChart className="h-4 w-4" />
        <AlertTitle>Coming Soon: 모니터링 및 로깅</AlertTitle>
        <AlertDescription>
          시스템 성능과 로그를 실시간으로 모니터링하고 분석하는 기능이 곧 추가될 예정입니다. 
          기대해 주세요!
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default HomePage;