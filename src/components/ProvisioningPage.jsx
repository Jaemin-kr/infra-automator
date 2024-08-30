import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, Cloud, Database } from 'lucide-react';

const ProvisioningTab = ({ icon: Icon, title, description, children }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Icon className="h-6 w-6" />
        <span>{title}</span>
      </CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const ProvisioningPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">자동화된 프로비저닝</h1>
      
      <Tabs defaultValue="server" className="space-y-4">
        <TabsList>
          <TabsTrigger value="server">서버 및 리소스 생성</TabsTrigger>
          <TabsTrigger value="cloud">클라우드 자원 프로비저닝</TabsTrigger>
          <TabsTrigger value="infrastructure">인프라 설정 관리</TabsTrigger>
        </TabsList>
        
        <TabsContent value="server">
          <ProvisioningTab
            icon={Server}
            title="서버 및 리소스 생성"
            description="온프레미스 및 클라우드 환경에서 새로운 리소스를 생성할 수 있는 인터페이스입니다."
          >
            {/* 여기에 서버 및 리소스 생성 폼을 추가할 수 있습니다 */}
            <p>서버 및 리소스 생성 폼이 이곳에 위치합니다.</p>
          </ProvisioningTab>
        </TabsContent>
        
        <TabsContent value="cloud">
          <ProvisioningTab
            icon={Cloud}
            title="클라우드 자원 프로비저닝"
            description="AWS, Azure, GCP와 같은 클라우드 서비스의 자원을 프로비저닝하는 기능입니다."
          >
            {/* 여기에 클라우드 자원 프로비저닝 폼을 추가할 수 있습니다 */}
            <p>클라우드 자원 프로비저닝 폼이 이곳에 위치합니다.</p>
          </ProvisioningTab>
        </TabsContent>
        
        <TabsContent value="infrastructure">
          <ProvisioningTab
            icon={Database}
            title="인프라 설정 관리"
            description="IaC 도구를 활용하여 설정 파일 관리 및 배포 자동화를 제공합니다."
          >
            {/* 여기에 인프라 설정 관리 폼을 추가할 수 있습니다 */}
            <p>인프라 설정 관리 폼이 이곳에 위치합니다.</p>
          </ProvisioningTab>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ProvisioningPage;