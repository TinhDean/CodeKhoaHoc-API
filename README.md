# 🎓 CodeKhoaHoc - NodeJS REST API

## 🚀 Mục tiêu Project
- Xây dựng backend NodeJS dùng Express
- Xác thực JWT: Đăng ký, Đăng nhập
- CRUD Items (có Auth)
- Swagger Docs tự động
- Deploy miễn phí trên Railway

---

## 📌 Các API Chính

| Tính năng | Method | URL | Mô tả |
|---|---|---|---|
| ✅ Đăng ký | POST | `/api/auth/register` | Đăng ký user |
| ✅ Đăng nhập | POST | `/api/auth/login` | Lấy JWT |
| ✅ Lấy Items | GET | `/api/items` | Công khai |
| ✅ Thêm Item | POST | `/api/items` | Cần JWT |
| ✅ Sửa Item | PUT | `/api/items/:id` | Cần JWT |
| ✅ Xoá Item | DELETE | `/api/items/:id` | Cần JWT |

---

## 📑 Swagger API Docs

| Môi trường | Link |
|---|---|
| ✅ Local | [http://localhost:3000/api-docs](http://localhost:3000/api-docs) |
| ✅ Railway | *(Link online sau khi deploy)* |

---

## ⚡ Cách chạy Local

### 1️⃣ Clone Project

```bash
git clone <LINK_REPO_GITHUB>
cd CodeKhoaHoc
