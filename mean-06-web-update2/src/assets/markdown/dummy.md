# Dummy Page

> หน้านี้เป็นหน้าสร้างไว้ชั่วคราว เพื่อให้เมนูใช้งานได้ ถ้าหากมีความต้องการใช้เมนูนี้ เพื่อพัฒนา function ตามที่ต้องการให้ทำตามขั้นตอนดังนี้

1. ปิด server angular
1. สร้าง component เพื่อรองรับการทำงานของหน้าจอที่ต้องการ
1. เปลี่ยน component ที่ file app-routing.module.ts
1. start server angular

## วิธีสร้าง component เพื่อรองรับการทำงานของหน้าจอที่ต้องการ

ถ้าต้องการสร้าง component ชื่อ product ให้ใช้คำสั่งดังนี้ที่ command line

```
npm run ng g c page/product
```

## วิธีเปลี่ยน component ที่ file app-routing.module.ts

ถ้าต้องการนำ component product มาใช้ใน url product ให้แก้ไขดังนี้

```typescript
{
    path: 'product', //ขื่อ url
    component: ProductComponent, //ชื่อ component
},
```

## คำสั่งสำหรับ start server angular

ถ้าต้องการ start dev server สำหรับทดสอบระบบงานที่พัฒนาด้วย angular ให้ใช้คำสั่งดังนี้ ที่ command line

```
npm start
```

หลังจาก start server เสร็จแล้วให้ทดสอบด้วยการเข้า url ดังนี้ http://localhost:4200

```
default user = a@a.com / 1111

```

## ขั้นตอนการนำ project next.js ไปใช้งาน

clone project เข้ามาที่เครื่องตัวเองด้วยคำสั่งดังนี้

```
// เปลี่ยนชื่อ your-project-name เป็นชื่อ project ของคุณ
git clone https://gitlab.com/sommai.k/nestjs-boilerplate your-project-name
cd you-project-name
git remote remove origin
```

เข้า website github หรือ gitlab เพื่อเข้าไปสร้าง project
หลังจากที่สร้าง project เสร็จแล้วให้ run คำสั่งดังนี้

```
git remote add origin <<your git url>>
git push origin master
```

## ขั้นตอนการนำ project angular ไปใช้งาน

clone project เข้ามาที่เครื่องตัวเองด้วยคำสั่งดังนี้

```
// เปลี่ยนชื่อ your-project-name เป็นชื่อ project ของคุณ
git clone https://gitlab.com/sommai.k/angular-boilerplate your-project-name
cd you-project-name
git remote remove origin
```

เข้า website github หรือ gitlab เพื่อเข้าไปสร้าง project
หลังจากที่สร้าง project เสร็จแล้วให้ run คำสั่งดังนี้

```
git remote add origin <<your git url>>
git push origin master
```
