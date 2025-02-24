import { Module } from '@nestjs/common';

import { WorkspaceModule } from 'src/core/workspace/workspace.module';
import { UserModule } from 'src/core/user/user.module';
import { RefreshTokenModule } from 'src/core/refresh-token/refresh-token.module';
import { AuthModule } from 'src/core/auth/auth.module';

import { AnalyticsModule } from './analytics/analytics.module';
import { FileModule } from './file/file.module';
import { ClientConfigModule } from './client-config/client-config.module';

@Module({
  imports: [
    AuthModule,
    WorkspaceModule,
    UserModule,
    RefreshTokenModule,
    AnalyticsModule,
    FileModule,
    ClientConfigModule,
  ],
  exports: [AuthModule, WorkspaceModule, UserModule, AnalyticsModule],
})
export class CoreModule {}
