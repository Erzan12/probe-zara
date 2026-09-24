import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, tap } from "rxjs";

@Injectable()
export class AuditLoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const start = Date.now();

        console.log(`[AUDIT] ${request.method} ${request.url} started`, request.body);

        return next.handle().pipe(
            tap((responseData) => {
                const duration = Date.now() - start;
                console.log(`[AUDIT] ${request.method} ${request.url} completed in ${duration}`, responseData);
            })
        )
    }
}