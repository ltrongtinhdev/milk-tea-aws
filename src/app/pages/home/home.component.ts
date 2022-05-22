import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { HomeService } from './home.service';
import { IFind, Product } from './product';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzMessageService } from 'ng-zorro-antd/message';
interface Person {
  key: string;
  name: string;
  age: number;
  address: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NzNotificationService,NzMessageService]
})
export class HomeComponent implements OnInit {
  indeterminate = false;
  checked = false;
  setOfCheckedId = new Set<String>();
  radioValue = '100';
  visible = false;
  rdoSize: String = 'M'
  rdoSugar: String = '100';
  rdoIce: String = '100'
  size: NzButtonSize = 'large';

  listProduct: Product[] = [];
  product: Product;
  constructor(
    private homeService: HomeService,
    private msg: NzNotificationService,
    private cf: NzMessageService
  ) { }

  ngOnInit(): void {
    this.product = new Product();
    this.loadInit();
  }

  loadInit():void {
    this.homeService.getProducs()
      .subscribe(
        (respone:any) => {
          if(respone.code === 200) {
            this.listProduct = respone.products
          } else {
            this.listProduct = []
          }
        },
        (e) => {
          this.listProduct = []
        }
      )
  }

  onAllChecked(event: any) {

  }
  onItemChecked(id: any,event: any) {}


  open(): void {
    this.visible = true;
    this.product = new Product();
  }
  edit(product: Product):void {
    this.visible = true;
    this.product = product
  }
  close(): void {
    this.visible = false;
  }
  cancel(): void {
  }

  confirm(id: String): void {
    this.homeService.deleteProduct({id})
      .subscribe(
        (res) => {
          if(res.code === 200) {
            return this.msg.success('Thông báo','Xoá thành công')
          }
          return this.msg.info('Thông báo','Xoá không thành công')
        },
        (e) => {
          this.msg.error('Thông báo','Xoá không thành công')
        },
        () => {
          this.loadInit()
        }
      )
  }
  save(product:Product) {
    console.log(product);

    if(!product._id) {
      this.homeService.addProduct(product)
        .subscribe(
          (res) => {
            if(res.code === 200) {
              return this.msg.success('Thông báo','Thêm mới thành công')
            }
            return this.msg.info('Thông báo','Thêm mới không thành công')
          },
          (e) => {
            this.msg.error('Thông báo','Thêm mới không thành công')
          },
          () => {
            this.visible = false
            this.loadInit()
          }
        )
    } else {
      this.homeService.updateProduct({...product,id:product._id})
      .subscribe(
        (res) => {
          if(res.code === 200) {
            return this.msg.success('Thông báo','Chỉnh sửa thành công')
          }
          return this.msg.info('Thông báo','Chỉnh sửa không thành công')
        },
        (e) => {
          this.msg.error('Thông báo','Chỉnh sửa không thành công')
        },
        () => {

          this.visible = false
          this.loadInit()
        }
      )
    }
    
  }
}
