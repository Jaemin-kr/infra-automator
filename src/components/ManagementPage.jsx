import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Settings, GitBranch } from 'lucide-react';

const ConfigTab = ({ icon: Icon, title, description, children }) => (
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

const ManagementPage = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-4">구성 관리</h1>
      
      <Tabs defaultValue="deployment" className="space-y-4">
        <TabsList>
          <TabsTrigger value="deployment">자동화된 설정 배포</TabsTrigger>
          <TabsTrigger value="changes">구성 변경 관리</TabsTrigger>
        </TabsList>
        
        <TabsContent value="deployment">
          <ConfigTab
            icon={Settings}
            title="자동화된 설정 배포"
            description="Ansible, Puppet, Chef 등을 사용하여 설정을 배포하고 관리하는 인터페이스입니다."
          >
            {/* 여기에 설정 배포 폼을 추가할 수 있습니다 */}
            <p>자동화된 설정 배포 인터페이스가 이곳에 위치합니다.</p>
          </ConfigTab>
        </TabsContent>
        
        <TabsContent value="changes">
          <ConfigTab
            icon={GitBranch}
            title="구성 변경 관리"
            description="구성 변경 내용의 자동 반영 및 롤백 기능, 변경 이력 관리 인터페이스를 제공합니다."
          >
            {/* 여기에 구성 변경 관리 폼을 추가할 수 있습니다 */}
            <p>구성 변경 관리 인터페이스가 이곳에 위치합니다.</p>
          </ConfigTab>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ManagementPage;