export const translations = {
  en: {
    headerTitle: "Assessment Test",
    heroTitle: "Reversing the Conversion Drop",
    heroSubtitle: "A comprehensive, data-driven strategy to optimize the booking funnel, reduce user friction, and restore customer trust—delivering early measurable impact within operational constraints.",
    scrollDown: "Explore the Strategy",

    section1Title: "1. The Challenge: Funnel Metrics",
    section1Desc: "Over the past 4 weeks, completed booking rates have steadily declined. Analyzing the 30-day funnel reveals three critical drop-off scenarios.",
    funnelSteps: [
      { name: "Service Page View", users: "240,000", conv: "-", drop: "", normal: true, width: "100%" },
      { name: "Click 'Book Now'", users: "84,000", conv: "35.0%", drop: "Traffic is stable", normal: true, width: "35%" },
      { name: "Select Date & Time", users: "51,000", conv: "60.7%", drop: "Mobile drop increase", alert: false, width: "21.2%" },
      { name: "Enter Address", users: "36,000", conv: "70.6%", drop: "High drop among NEW users", alert: true, width: "15%" },
      { name: "Confirm Booking", users: "18,500", conv: "51.4%", drop: "Largest drop-off point!", alert: true, width: "7.7%" },
      { name: "Payment Complete", users: "14,800", conv: "80.0%", drop: "Final Conversion ~6.2%", normal: true, width: "6.2%" }
    ],

    section2Title: "2. Root Cause Analysis",
    rcs: [
      {
        title: "Root Cause 1: Pricing Transparency Issue",
        desc: "Users experience 'Sticker Shock' at the final step due to hidden fees.",
        evidence: "The largest drop-off occurs at the 'Confirm Booking' step (only 51.4% conversion).",
        signal: "CS feedback highlights 'Final price is unclear' and 'Not sure if there are extra charges'.",
        impact: "Users abandon the flow when unexpected fees appear. This feeling of being 'tricked' perfectly explains the severe NPS drop (41 to 33) for first-time users."
      },
      {
        title: "Root Cause 2: High-Friction Address UX",
        desc: "Cumbersome and long address entry forms drive new users away.",
        evidence: "High drop-off specifically among new users at the 'Enter Address' step (70.6% conv, losing 15,000 users).",
        signal: "Users complain the 'Form is too long'. Ops reported incomplete inputs are inflating manual checks.",
        impact: "New users without saved addresses are overwhelmed. The lack of standard validation leads to messy data, frustrating users and significantly inflating operational costs."
      },
      {
        title: "Root Cause 3: Suboptimal Mobile UI",
        desc: "Clunky UI components degrade the core mobile experience.",
        evidence: "Overall mobile app completion rate is ~24% lower than web, with a specific drop exactly at 'Select Date & Time'.",
        signal: "Analytics indicate a steep 'slight drop increase' on mobile environments.",
        impact: "Non-native, clunky date/time components on mobile cause friction, disproportionately hurting the growing mobile segment."
      }
    ],

    section3Title: "3. Prioritized Backlog (Suggested Solutions)",
    epics: [
      {
        title: "Epic 1: Transparent Pricing Experience",
        rc: "Addresses RC 1",
        items: [
          { name: "Item 1.1: Itemized Price Breakdown UI", effort: "Medium", desc: "Redesign 'Confirm Booking' screen to fully itemize Base Price, VAT, and Surcharges with helpful tooltips." },
          { name: "Item 1.2: Upfront 'Estimated Price' Indicator", effort: "Quick Win", desc: "Add a dynamic price estimate box earlier in the funnel (e.g., at Date & Time) to set accurate expectations." }
        ]
      },
      {
        title: "Epic 2: Frictionless Address Input",
        rc: "Addresses RC 2",
        items: [
          { name: "Item 2.1: Address Autocomplete Integration", effort: "Medium", desc: "Integrate Google Places API to search via a single text bar, auto-populating City/District data." },
          { name: "Item 2.2: Location Permission Prompt", effort: "Medium", desc: "Prompt mobile users for GPS permission to automatically fill current neighborhood bounds." }
        ]
      },
      {
        title: "Epic 3: Mobile UX Polish",
        rc: "Addresses RC 3",
        items: [
          { name: "Item 3.1: Native OS Date/Time Pickers", effort: "Medium", desc: "Replace web-based date/time dropdowns on the mobile app with native iOS/Android picker wheels for glitch-free selection." }
        ]
      }
    ],

    section4Title: "4. Execution Plan (Next 1-2 Sprints)",
    sprintConstraint: "Constraint: Engineering capacity max 2 Medium OR 1 Quick Win per week. Leadership expects early measurable impact and no long-term refactors.",
    sprints: [
      {
        name: "Sprint 1: Stop the Bleeding & Relieve Ops",
        focus: "Highest ROI Initiatives",
        tasks: [
          { name: "Initiative 1: Address Autocomplete (Item 2.1)", why: "Plugs the severe new-user leak at 'Enter Address' and directly eliminates manual verification workload for the Ops team." },
          { name: "Initiative 2: Itemized Price Breakdown UI (Item 1.1)", why: "Targets the absolute largest funnel leak (51.4% conv). Highly visible frontend change that immediately acts to recover high-intent users and improve initial NPS." }
        ]
      },
      {
        name: "Sprint 2: Funnel Optimization & Mobile Parity",
        focus: "Sustaining momentum and capturing technical parity",
        tasks: [
          { name: "Initiative 3: Native Mobile Pickers (Item 3.1)", why: "Bridges the 24% conversion gap between the mobile app and web platform by directly resolving reported UI friction." },
          { name: "Initiative 4: Upfront Estimated Price (Item 1.2)", why: "Reinforces the pricing trust strategy set in Sprint 1, further uplifting NPS and filtering low-intent users effectively." }
        ]
      }
    ],

    section5Title: "5. Risks & Trade-offs",
    risks: [
      { title: "Risk: API Costs for Autocomplete", desc: "Using a 3rd-party mapping API incurs request costs.", mit: "Actively monitor the API cost against the savings gained from reduced CS/Ops manual verification. Fallback to structured custom dropdowns if costs escalate." },
      { title: "Risk: Technical Complexity", desc: "Re-architecting billing logic violates the 'no long-term rebuild' constraint.", mit: "Sprint 1 focuses strictly on Frontend UI transparency—displaying existing backend numbers more clearly rather than re-writing any heavy core pricing logic." },
      { title: "Risk: Moving Transparency Upstream", desc: "Showing prices earlier may cause earlier funnel drop-offs.", mit: "This is a positive trade-off: it filters early users with low willingness-to-pay, drastically improves Confirm -> Payment conversion, and protects brand trust (NPS)." }
    ]
  },
  vi: {
    headerTitle: "Đánh giá năng lực",
    heroTitle: "Xử Lý Sự Sụt Giảm Tỷ Lệ Chuyển Đổi",
    heroSubtitle: "Chiến lược tối ưu hóa phễu đặt lịch, giảm rào cản người dùng và phục hồi NPS - tác động nhanh mà không cần đập đi xây lại nền tảng dài hạn.",
    scrollDown: "Khám phá Chiến lược Chi tiết",

    section1Title: "1. Thách thức: Chỉ số Phễu",
    section1Desc: "Tỷ lệ hoàn tất đặt lịch đang sụt giảm xuất phát từ ba nguyên nhân chính yếu sau (phân tích trên số liệu 30 ngày qua).",
    funnelSteps: [
      { name: "Xem Trang Dịch vụ", users: "240,000", conv: "-", drop: "", normal: true, width: "100%" },
      { name: "Bấm 'Đăng ký ngay'", users: "84,000", conv: "35.0%", drop: "Lưu lượng giữ ổn định", normal: true, width: "35%" },
      { name: "Chọn Ngày & Giờ", users: "51,000", conv: "60.7%", drop: "Mức giảm nhẹ cụ thể trên Mobile", alert: false, width: "21.2%" },
      { name: "Nhập Địa chỉ", users: "36,000", conv: "70.6%", drop: "Tỷ lệ bỏ cuộc cao ở User Mới", alert: true, width: "15%" },
      { name: "Xác nhận Đặt lịch", users: "18,500", conv: "51.4%", drop: "Điểm rớt khách hàng lớn nhất!", alert: true, width: "7.7%" },
      { name: "Thanh toán Thành công", users: "14,800", conv: "80.0%", drop: "Chuyển đổi Tổng luồng ~6.2%", normal: true, width: "6.2%" }
    ],

    section2Title: "2. Phân Tích Nguyên Nhân Gốc rễ",
    rcs: [
      {
        title: "Nguyên nhân Gốc rễ 1: Tình trạng 'Sốc giá' do thiếu minh bạch chi phí",
        desc: "Khách hàng gặp hiệu ứng 'Sốc giá' (Sticker Shock) ở bước màn hình Xác nhận do thiếu minh bạch chi phí.",
        evidence: "Điểm rớt lớn nhất của phễu xảy ra ở bước 'Xác nhận Đặt lịch' (chỉ có 51.4% người dùng đi tiếp).",
        signal: "Phản hồi từ bộ phận CS (Chăm sóc Khách hàng) ghi nhận khách than phiền 'Giá cuối cùng không rõ ràng' và 'Không chắc chắn có phụ phí hay không'.",
        impact: "Cảm giác 'bị đánh lừa' do phụ phí xuất hiện ở bước cuối giải thích hoàn toàn lý do mức điểm NPS giảm nghiêm trọng (từ 41 xuống 33) đối với khách hàng mới."
      },
      {
        title: "Nguyên nhân Gốc rễ 2: Rào cản lớn khi Nhập Địa chỉ",
        desc: "Giao diện điền form địa chỉ cồng kềnh là bức tường cản bước lượng lớn User mới.",
        evidence: "Tỷ lệ bỏ cuộc tăng đặc biệt cao ở nhóm người dùng mới tại bước 'Nhập Địa chỉ' (chuyển đổi 70.6%, mất 15,000 khách tiềm năng).",
        signal: "Khách hàng phàn nàn 'Form điền quá dài'. Team Vận hành báo cáo việc nhập địa chỉ thiếu/sai làm tăng khối lượng việc gọi điện xác minh thủ công.",
        impact: "Người dùng mới bị quá tải bởi form. Dữ liệu đầu vào lộn xộn do thiếu xác thực vừa gây ức chế cho khách, vừa tốn kém chi phí nhân sự để xử lý bằng tay."
      },
      {
        title: "Nguyên nhân Gốc rễ 3: Trải nghiệm Mobile chưa được tối ưu",
        desc: "Thao tác ứng dụng trên app chưa tận dụng được sức mạnh trải nghiệm mượt mà của Native OS.",
        evidence: "Tổng tỷ lệ hoàn tất luồng qua ứng dụng di động (Mobile app) thấp hơn nền tảng Web khoảng ~24%.",
        signal: "Dữ liệu chỉ ra xuất hiện một mức giảm nhẹ (drop) tập trung cụ thể ở bước 'Chọn Ngày & Giờ' trên Mobile.",
        impact: "Các thành phần giao diện phục vụ việc chọn ngày giờ trên thiết bị di động gây khó chịu, trực tiếp làm giảm hiệu quả tỷ lệ chuyển đổi của nền tảng Mobile."
      }
    ],

    section3Title: "3. Đề xuất Hạng mục Backlog (Sắp xếp ưu tiên)",
    epics: [
      {
        title: "Epic 1: Minh bạch Hóa Trải nghiệm Giá",
        rc: "Giải quyết Nguyên nhân 1",
        items: [
          { name: "Item 1.1: Giao diện Bóc tách Phí (Itemized Price)", effort: "Medium", desc: "Thiết kế lại màn hình 'Xác nhận Đặt lịch' để phân rã rõ ràng bảng chi phí (Giá Dịch vụ, Thuế VAT, Phụ thu/Phí di chuyển...) kèm các tooltips thân thiện giải thích." },
          { name: "Item 1.2: Báo giá 'Ước tính' hiển thị sớm", effort: "Quick Win", desc: "Hiển thị một khung báo giá tạm tính ngay từ khi người dùng mới 'Chọn Ngày & Giờ', nhằm thiết lập kỳ vọng đúng đắn từ đầu." }
        ]
      },
      {
        title: "Epic 2: Tối giản Nhập Địa chỉ",
        rc: "Giải quyết Nguyên nhân 2",
        items: [
          { name: "Item 2.1: Tích hợp Autocomplete Địa chỉ", effort: "Medium", desc: "Sử dụng dịch vụ API bên thứ 3 (vd: Google Places) để tự động gợi ý địa chỉ chỉ với 1 thanh tra cứu duy nhất, tự điền dữ liệu Tỉnh/Thành/Phường/xã." },
          { name: "Item 2.2: Đề xuất quyền Truy cập Vị trí (Location)", effort: "Medium", desc: "Xin cấp quyền GPS trên thiết bị di động để tự động xác định và đổ dữ liệu về Phường/Khu vực hiện tại nếu User muốn nhanh gọn." }
        ]
      },
      {
        title: "Epic 3: Trau chuốt UX Mobile",
        rc: "Giải quyết Nguyên nhân 3",
        items: [
          { name: "Item 3.1: Ứng dụng Native OS Date/Time Pickers", effort: "Medium", desc: "Loại bỏ thao tác chọn ngày giờ lạc hậu trên ứng dụng, thay bằng màn gẩy cuộn chọn giờ chuẩn Native của riêng hệ điều hành iOS/Android để thao tác trơn tru." }
        ]
      }
    ],

    section4Title: "4. Kế hoạch Thực thi (1-2 Sprints tới)",
    sprintConstraint: "Kiểm tra Ràng buộc: Năng lực tối đa 2 sáng kiến cỡ Vừa (Medium) HOẶC 1 Quick win / mỗi tuần. Lãnh đạo kỳ vọng có tác động đo lường ngay sớm, KHÔNG xây mới cấu trúc dài hạn.",
    sprints: [
      {
        name: "Sprint 1: Cầm máu Cấp bách & Giải thoát Ops",
        focus: "Đem lại ROI cao nhất ngay tuần đầu",
        tasks: [
          { name: "Sáng kiến 1: Tích hợp Autocomplete Địa chỉ (Triển khai Item 2.1)", why: "Vá ngay lổ hổng lớn khiến New User rơi rụng ở bước 'Nhập Địa chỉ'. ĐỒNG THỜI trực tiếp xóa bỏ vĩnh viễn việc gọi điện kiểm tra địa chỉ bằng tay cho team Ops." },
          { name: "Sáng kiến 2: Bảng Bóc Tách Phí ở màn Xác nhận (Triển khai Item 1.1)", why: "Tập kích thẳng vào hố đen rò rỉ lớn nhất của phễu (chỉ 51.4% chuyển đổi). Trực tiếp làm phục hồi điểm NPS sau đặt lịch qua việc thay đổi giao diện minh bạch." }
        ]
      },
      {
        name: "Sprint 2: Tinh chỉnh Phễu & Cân bằng Mobile",
        focus: "Lấy lại vị thế Trải nghiệm người dùng Mobile",
        tasks: [
          { name: "Sáng kiến 3: Bộ Date Pickers Kiểu Native cho Mobile (Triển khai Item 3.1)", why: "Làm cầu nối khép lại triệt để khoảng chênh lệch 24% tỷ lệ chuyển đổi đang thua thiệt của App di động khi so sánh với nền tảng Web." },
          { name: "Sáng kiến 4: Gắn Chỉ báo Giá ước tính sơ bộ (Triển khai Item 1.2)", why: "Củng cố nốt chiến lược Tái sinh Niềm tin, chủ động sàng lọc trước lượng khách nhạy cảm với sự chênh lệch giá, bảo toàn Conversion Rate từ sớm." }
        ]
      }
    ],

    section5Title: "5. Rủi ro & Đánh đổi",
    risks: [
      { title: "Rủi ro: Chi phí cho API Autocomplete Địa chỉ", desc: "Mỗi lượt gõ sử dụng Google Maps/Places API đều phát sinh một khoản chi phí phải trả cho nhà cung cấp dịch vụ.", mit: "Theo dõi sát sao chi phí API so với hiệu quả cắt giảm vận hành thủ công (CS/Ops). Nếu chi phí leo thang, lập tức dùng phương án dự phòng là các menu lựa chọn (dropdown) có sẵn." },
      { title: "Rủi ro: Độ phức tạp về kỹ thuật", desc: "Việc cấu trúc lại logic tính phí (billing logic) sẽ vi phạm ràng buộc - không tái thiết lập hệ thống dài hạn", mit: "Sprint 1 tập trung hoàn toàn vào tính minh bạch của giao diện người dùng (Frontend UI) — hiển thị các con số hiện có từ phía Backend một cách rõ ràng hơn, thay vì viết lại bất kỳ logic tính giá cốt lõi (core pricing logic) phức tạp nào." },
      { title: "Rủi ro: Đưa việc xem ước tính phí lên quá sớm", desc: "Dự kiến tỷ lệ chuyển đổi ở bước phễu trên (từ bước Thời gian -> Địa chỉ) rất có thể sẽ giảm nhẹ.", mit: "Đây là một sự hy sinh BẮT BUỘC VÀ TÍCH CỰC. Nó chủ động lọc đi các user có rào cản chi phí thấp từ sớm, bù lại đem đến hiệu ứng 'Hốt sạch' tệp User tiềm năng ở các bước phễu cuối cùng (từ Xác Nhận -> Thanh Toán), kiên quyết bảo vệ điểm định hình sinh mệnh Startups là NPS." }
    ]
  }
};
