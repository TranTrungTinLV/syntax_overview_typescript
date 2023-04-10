#TypeScipt là gì?
  -TypeScript(của Microsoft dùng free nha!) là superset của JS, nó cũng tương tự với JavaScipt nhưng nó có xịn xò hơn và đặc biệt là phát hiện lỗi(bug), cấu trúc sẽ rõ ràng và chặt chẽ hơn so với JS
  -TypeScript khác ở JavaScript đó là ở phần 'types'(trong cái tên TypeScript) tức là cần phải ép kiểu dữ liệu khi khai báo biến

#Cách cài đặt? 
  -Sử dụng dài lâu nên ở đây ta dùng: npx -g typescipt 
  -Check env nodejs(ở đây em dùng đó là bản v16.14.0)
  -Sau khi cài đặt thì check version và xem nó có cài đặt thành công chưa thông qua "npx tsc"(Version 5.0.3 tsc: The TypeScript Compiler - Version 5.0.3  )

#Cách sử dụng?
  -Ví dụ đơn giản đó là: Tạo file index.ts với câu lệnh duy nhất console.log("hello Word!"), vậy làm sao để có thể chạy thì ở đây ta sẽ dùng cú pháp "npx tsc index" => compair thành file index.js  
  -Hmmm! Vậy làm sao để chạy được file đó? Ở đây khi check nodejs rồi thì sẽ dùng với nodejs với câu lệnh "node index.js" trong terminal, sau đó nó sẽ trả cho chúng ta kết quả
  ![image](https://user-images.githubusercontent.com/74409780/230871474-74b07e47-3f17-41c7-9a72-ceff1f4afc8e.png)
  -Làm sao để xem kết quả vừa thay đổi bên index.ts mà bên index.js sẽ thay đổi mà không cần sử dụng lại câu lênh "npx tsc index.ts", OK! ở đây ta sẽ dùng câu lệnh "npx tsc -w"
          Lưu ý: 
          1. Nếu muốn sử dụng câu lệnh "npx tsc -w" này thì trước tiên ta cần phải tạo một package.js(hệ thống chung) bằng câu lệnh npm init --y và ở đây nó sẽ xuất hiện trong project của chúng ta 2 file package.json và pakage-lock.json
                  ![image](https://user-images.githubusercontent.com/74409780/230872317-fe34fbc3-12c4-4fce-8e4c-8dc24fefde4b.png)
          2. Tiếp theo là trong package.json thì ta cần phải thay đổi ở main: "<file nào muốn run watch>"
                  ![image](https://user-images.githubusercontent.com/74409780/230872600-66f71860-2d61-47e9-92d2-91d3a1194cda.png)

#Điểm khác nhau giữa .ts và .tsx?
    Cả 2 dot này đểu là của tệp mã nguồn mở của TypeScript.
    Nhưng điểm khác:
          -(.ts):
              Không chứa mã .JSX
              Do nó là của TS, nên được viết các tính năng của TS
              TypeScript cung cấp các tính năng mở rộng cho JavaScript, bao gồm kiểu dữ liệu tĩnh và tính năng lập trình hướng đối tượng.
           -(.tsx):
              Chứa mã .JSX
              Hỗ trỡ viết mã TSX trong '.jsx'
#Các phần tìm hiểu về TypeScript?
      -Đặt biến trong TS
      -Function trong TS
      -Array and Obj trong TS
      -Explict Types trong TS
      -Type Alias trong TS
      -Function Signature
      -Optional và Non-null(NaN)
      -Class và module
      -Class và interface
              
