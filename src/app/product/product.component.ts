import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products = [
    {
      title: "Chillers",
      description: "Our selection of chillers combines cutting-edge technology with energy efficiency to ensure optimal performance. Designed to maintain precise temperatures, our chillers are suitable for a wide range of applications, from food preservation to industrial processes."
    },
    {
      title: "Deep Freezers",
      description: "Experience the benefits of superior freezing capabilities with our range of deep freezers. Built to withstand demanding environments, our units provide exceptional storage solutions for frozen goods, ensuring they remain at the perfect temperature."
    },
    {
      title: "Visicoolers",
      description: "Enhance your retail space with our selection of visicoolers, designed for both functionality and aesthetics. These units offer convenient display options for beverages, dairy products, and other perishables, allowing customers easy access while maintaining product integrity."
    },
    {
      title: "Backbar Refrigerators",
      description: "Create an inviting and organized bar area with our backbar refrigerators. These units are intelligently designed to provide easy access to a variety of beverages, ensuring your patrons always enjoy a refreshing experience."
    },
    {
      title: "Pastry Cabinets",
      description: "Elevate your bakery with our precision-engineered pastry cabinets. These units are tailored to preserve the quality and freshness of delicate pastries, cakes, and desserts, while also presenting them in an attractive manner."
    },
    {
      title: "AC Spare Parts",
      description: "In addition to our extensive range of refrigeration products, we also stock a comprehensive selection of spare parts. From compressors to thermostats, we offer genuine components to ensure the longevity and performance of your refrigeration units."
    }
  ]

}
