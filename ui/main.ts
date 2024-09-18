import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./src/app/app.config";
import { AppComponent } from "./src/app/app.component";
import { provideAnimations } from "@angular/platform-browser/animations";

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideAnimations(),  // Activer les animations pour toute l'application
  ],
}).catch((err) => console.error(err));
