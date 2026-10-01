let queue = ['30A-65415', '29B-18425', '51C-24268'];
console.log("Hàng đợi ban đầu:", queue);

queue.push('43D-444');
console.log("Sau khi xe 43D-444 đến (push):", queue);

queue.splice(1, 0, '14A-999');
console.log("Sau khi chèn xe ưu tiên 14A-999 vào vị trí 1 (splice):", queue);

let chargingVehicle = queue.shift();
console.log(`Xe vào cổng sạc (shift): ${chargingVehicle}`);
console.log("Hàng đợi còn lại:", queue);

const kWhList = [30, 45, 25];
const PRICE_PER_KWH = 4500; 

let totalKWh = 0;
for (let i = 0; i < kWhList.length; i++) {
    totalKWh += kWhList[i];
}

let totalRevenue = totalKWh * PRICE_PER_KWH;

console.log(`--- BÁO CÁO CA TRỰC ---
    Tổng điện năng tiêu thụ: ${totalKWh} kWh
    Tổng doanh thu ca trực: ${totalRevenue} VNĐ`);
