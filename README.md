# BÀI TEST THIẾT KẾ UI/UX & FRONTEND DEVELOPMENT
## Dự án: Top VPN Services 2026

* **Ứng viên:** Nguyễn Thanh  
* **Đơn vị tuyển dụng:** Công ty TNHH Truyền thông và Quảng cáo H2T  
* **Vị trí ứng tuyển:** Thực tập sinh Fullstack  

---

## 1. Research UI & Phân tích đối thủ

Trước khi thiết kế, tôi đã tìm hiểu 3 trang web VPN phổ biến là **Surfshark**, **NordVPN** và **Top10VPN** để tham khảo cách họ trình bày thông tin:

| Website | Điểm mạnh thiết kế | Bảng màu | Typography | Layout & Spacing | Nút CTA |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Surfshark** | Thẻ card xám nhạt, icon nét đen tối giản, bảng giá có danh sách tính năng kèm dấu check bên phải. | Teal (`#00C4BC`), Đen nòng súng (`#1A1A2E`), Đỏ (`#FF385C`). | Plus Jakarta Sans, chữ ngắt dòng gọn gàng. | Thẻ bo góc 24px, lề thoáng. | Nút dạng viền đen đậm, có banner "Most popular". |
| **NordVPN** | Banner ưu đãi kèm hình ảnh thiết bị thực tế, mức giá nổi bật. | Xanh đậm, Đỏ tươi. | Heading chữ in đậm nét to, giá tiền phóng to. | Layout 2 cột (Trái: Hình ảnh / Phải: Thông tin gói). | Nút màu đỏ nổi bật kèm dòng bảo đảm hoàn tiền 30 ngày. |
| **Top10VPN** | Bảng so sánh thứ hạng chi tiết, hiển thị tiêu chí rõ ràng. | Xanh đen Slate, Xanh lá. | Font Sans-serif tiêu chuẩn, phân cấp rõ ràng. | Dạng bảng lưới cột thẳng hàng. | Nút "Get Deal" trên từng hàng so sánh. |

### 📌 Điểm học hỏi và áp dụng:
1. **Thiết kế bảng giá Surfshark:** Áp dụng mẫu thẻ giá gói 2 năm có banner *"MOST POPULAR"*, danh sách tính năng kèm dấu check `✓` bên phải và các thẻ có chiều cao bằng nhau.
2. **Hero Banner thực tế:** Đặt hình ảnh mockup điện thoại nghiêng 10 độ bên cạnh thông tin ưu đãi **$2.49/tháng**, giúp giao diện nhìn giống sản phẩm thật.

---

## 2. Design System

### Màu sắc:
* **Primary Navy (`#1E293B`):** Dùng cho tiêu đề và chữ chính, dịu mắt hơn màu đen tuyền.
* **Brand Teal (`#00C4BC`):** Màu thương hiệu VPNScope, dùng cho thẻ nổi bật, banner gói Hot và dấu check.
* **Accent Red (`#E63946`):** Dùng cho nút CTA chính và thông số giảm giá.
* **Nền sáng (`#FAFAFC` & `#F5F6F8`):** Dùng cho nền trang và thẻ tính năng.
* **Nền tối (`#111118`):** Dùng cho phần FAQ và Footer ở cuối trang.

### Typography:
* **Font:** `Plus Jakarta Sans` (kết hợp `Inter`).
* **H1 (Hero):** 36px - 44px, Bold 800.
* **H2 (Section):** 28px - 36px, Bold 800.
* **H3 (Card):** 16px - 20px, Bold 700.
* **Body:** 14px - 15px, Regular 400, màu Slate `#64748B`.

### Spacing & Component:
* Quy tắc khoảng cách: 8px Grid System (`8px`, `16px`, `24px`, `32px`, `48px`).
* Nút bấm: Bo góc `rounded-2xl`, viền 2px hoặc shadow đỏ mờ.
* Thẻ card: Bo góc `24px`, viền nhẹ hoặc nền xám `#F5F6F8`.

---

## 3. Thiết kế Homepage & Bố cục

Trang web được chia thành 6 phần theo trình tự cuộn trang:

1. **Header (Menu):** Sticky top, chứa Logo VPNScope, danh mục điều hướng và nút CTA góc phải.
2. **Hero Banner:** Hiển thị thông tin giảm giá 62% + 3 tháng miễn phí kèm mockup ứng dụng di động.
3. **Comparison Table (Bảng so sánh):** Bảng so sánh 5 VPN. VPNScope được làm nổi bật dạng thẻ Hero xanh ngọc (`#00C4BC`) phình to. Các hàng so sánh dùng màu sọc ngang alternated để người dùng dễ nhìn.
4. **Why VPNScope:** 6 card tính năng dùng icon nét đen kiểu Surfshark + hình ảnh người phụ nữ tại sân bay minh họa tính năng VPN khi đi du lịch.
5. **Pricing Section (Bảng giá):** 3 gói dịch vụ được căn bằng chiều cao tuyệt đối, các nút bấm và thông tin 30 ngày hoàn tiền nằm trên cùng hàng.
6. **FAQ & Footer (Dark Mode):** Nền màu đen `#111118`, câu hỏi dạng Accordion đóng mở đơn giản.

---

## 4. Tư duy triển khai Frontend

### Cấu trúc Component:
```
src/
├── components/
│   ├── Header.jsx          # Thanh menu & nút CTA
│   ├── HeroVpnBanner.jsx   # Banner chính kèm mockup
│   ├── ComparisonTable.jsx # Bảng so sánh 5 VPN
│   ├── WhyVpnSection.jsx   # 6 card tính năng & minh họa du lịch
│   ├── PricingSection.jsx  # Bảng giá 3 gói đồng đều
│   ├── FaqSection.jsx      # FAQ Accordion nền tối #111118
│   └── Footer.jsx          # Chân trang 5 cột
├── hooks/
│   └── useScrollAnimation.js # Custom hook cho hiệu ứng cuộn trang
├── App.jsx                 # Layout chính & quản lý Modal deal
├── index.css               # CSS biến màu & font chữ
└── main.jsx                # Entry point
```

### Xử lý Responsive:
* **Desktop (>= 1024px):** Bảng so sánh dùng CSS Grid `18% 18% repeat(4, 1fr)` vừa vặn khung hình, không bị cuộn ngang.
* **Mobile (< 768px):** Các thẻ giá và card tính năng tự động co về 1 cột (`grid-cols-1`).

### Thách thức kỹ thuật:
* **Thẻ Hero đè lên bảng so sánh:** Thẻ VPNScope cần phủ từ tiêu đề xuống nút bấm mà không làm lệch các dòng của đối thủ. Xử lý bằng cách tính chiều cao cố định cho từng hàng (`76px`) và đặt card ở dạng `relative` phủ đè.

---

## 5. Giải thích quyết định thiết kế

* **Vì sao chọn màu sắc này?**
  Màu Slate `#1E293B` giúp văn bản rõ ràng mà không bị gắt mắt. Màu xanh ngọc `#00C4BC` làm màu nhấn thương hiệu và màu đỏ `#E63946` để thu hút sự chú ý vào nút bấm.
* **Vì sao chọn font chữ này?**
  Font `Plus Jakarta Sans` có nét chữ hiện đại, hiển thị con số và giá tiền rất rõ ràng trên giao diện web.
* **Nguồn cảm hứng:**
  Tham khảo cách làm card của **Surfshark**, cách đặt nút và giá của **NordVPN**, và cách làm bảng so sánh của **Top10VPN**.
* **Hướng phát triển tiếp theo:**
  Thêm bộ chuyển đổi tiền tệ theo quốc gia và tính năng lọc dịch vụ VPN theo nhu cầu (Xem phim, Chơi game, Làm việc).

---

## 6. Hướng dẫn chạy dự án

### Cài đặt và khởi chạy:
```bash
# Cài đặt thư viện
npm install

# Chạy môi trường dev
npm run dev

# Build sản phẩm
npm run build
```

Địa chỉ truy cập local: **`http://localhost:5173`**
