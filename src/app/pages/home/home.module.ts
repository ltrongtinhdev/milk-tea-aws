import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../../shares/ng-zorro-antd.module';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HomeService]
})
export class HomeModule { }
