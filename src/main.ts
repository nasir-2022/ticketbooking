
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ExceptionExceptionFilter } from './common/exception-filter/exception-filter.filter';
import { TransformInterceptor } from './common/transform-interceptor/transform.interceptor';
/**
 * main class
 * @author Md Nasir Hussain
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 /**
   * globle filters
   */
  app.useGlobalFilters(new ExceptionExceptionFilter());
  /**
   * globle pipes
   */
   //app.useGlobalPipes(new ValidationPipe());
   /**
   * globle interceptore
   */
  app.useGlobalInterceptors(new TransformInterceptor());
  /**
   * swaggerConfigration here
   */

  let swaggerConfig =new DocumentBuilder()
.setTitle('Ticket Booking')
    .setDescription('Ticket booking apis')
    .setVersion('1.0')
    .setContact('nasir','','md.nasirhussain@hcl.com')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, document);
 
  
  await app.listen(3000);
}
bootstrap();
