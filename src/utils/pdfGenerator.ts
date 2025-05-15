
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CartItem } from '@/types';

export const generatePDF = (items: CartItem[], totalPrice: number) => {
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(20);
  doc.setTextColor(242, 99, 33); // Orange color
  doc.text('KMT Building Solutions', 105, 20, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0); // Black color
  doc.text('Invoice', 105, 30, { align: 'center' });
  
  // Add date
  const today = new Date();
  doc.setFontSize(10);
  doc.text(`Date: ${today.toLocaleDateString()}`, 20, 40);
  doc.text(`Invoice #: KMT${Math.floor(Math.random() * 10000)}`, 20, 45);
  
  // Create table
  const tableColumn = ['Item', 'Quantity', 'Unit Price (₹)', 'Total (₹)'];
  const tableRows: Array<(string | number)[]> = [];
  
  items.forEach(item => {
    const itemData = [
      item.product.name,
      item.quantity,
      item.product.price.toLocaleString(),
      (item.product.price * item.quantity).toLocaleString()
    ];
    tableRows.push(itemData);
  });
  
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 50,
    theme: 'striped',
    headStyles: {
      fillColor: [242, 99, 33],
      textColor: [255, 255, 255],
      fontStyle: 'bold',
    },
    styles: {
      halign: 'center',
    },
  });
  
  // Add total
  const finalY = (doc as any).lastAutoTable.finalY;
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Total: ₹${totalPrice.toLocaleString()}`, 150, finalY + 15, { align: 'right' });
  
  // Add footer with updated contact details
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Thank you for shopping at KMT Building Solutions!', 105, finalY + 30, { align: 'center' });
  doc.text('Address: Do.no:6, Amman nagar, Saravanampatti, Coimbatore-641035', 105, finalY + 35, { align: 'center' });
  doc.text('Contact: +91 9345587584 | Email: karthiksolaisamy5@gmail.com', 105, finalY + 40, { align: 'center' });
  
  // Save PDF
  doc.save('KMT_Building_Solutions_Invoice.pdf');
};
