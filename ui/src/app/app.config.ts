import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { provideHttpClient } from "@angular/common/http";
import { provideToastr } from "ngx-toastr";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({
      timeOut: 5000,
      positionClass: "toast-bottom-right",
      preventDuplicates: true,
      progressBar: true,
      progressAnimation: "decreasing",
      closeButton: true,
    }),
  ],
};
