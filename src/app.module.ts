import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    UserModule,
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'mysql.railway.internal',
    //   port: 3306,
    //   username: 'root',
    //   password: 'QGCFXYjoarztnNgttCpcjMVCQxjkyFvL',
    //   database: 'railway',
    //   entities: ['dist/**/*.entity.{ts,js}'],
    //   synchronize: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
