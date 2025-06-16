# 🎓 CodeKhoaHoc - NodeJS REST API

## 🚀 Mục tiêu Project
- Xây dựng backend NodeJS dùng Express
- CRUD Items với MongoDB (Atlas)
- Xác thực JWT (Register/Login)
- Tài liệu API tự động bằng Swagger
- Triển khai miễn phí trên Railway

---

## 📌 Các API Chính

| Tính năng | Method | URL | Mô tả |
|---|---|---|---|
| Đăng ký | POST | `/api/auth/register` | Đăng ký tài khoản mới |
| Đăng nhập | POST | `/api/auth/login` | Đăng nhập lấy JWT |
| Lấy Items | GET | `/api/items` | Lấy danh sách Items (PUBLIC) |
| Thêm Item | POST | `/api/items` | Thêm Item (Cần JWT) |
| Sửa Item | PUT | `/api/items/:id` | Sửa Item (Cần JWT) |
| Xoá Item | DELETE | `/api/items/:id` | Xoá Item (Cần JWT) |

---

## 📑 Swagger API Docs

- **Local:** [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- **Online Railway:** `https://<your-app>.up.railway.app/api-docs`

---

## ⚡ Cách chạy Local

### 1️⃣ Clone Project

```bash
git clone <LINK_REPO_GITHUB>
cd CodeKhoaHoc
