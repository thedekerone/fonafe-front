import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../../models/post';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  id: string = "";
  post: Post = {
    id: "",
    imageSrc: "",
    title: "",
    date: new Date,
  };

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || "";


      this.post = this.getPost(this.id)
      if (!this.post) {
      }
    });
  }

  getPost(id: string): Post {
  //modifical cuando exista el servicio post
    if(!id){
              this.router.navigate(["sala-de-prensa"])

    }

    return {
      title: "Corporacion Fonafe: EDE proyectan una inversión mayor a los de S/ 670 millones al termino del 2023",
      category: "Financiamiento",
      content: `Introduction

Siguiendo nuestro objetivo de generar valor económico, social, ambiental y en nuestro propósito de generar progreso y bienestar para las familias de nuestro país, nuestras 11 empresas de distribución eléctrica (EDE) vienen trabajando incesantemente para brindar un mejor servicio.

Para ello, nuestras empresas de distribución eléctrica tienen previsto realizar, en el 2023, inversiones FBK por un total de S/ 670.3 millones. En tanto, entre enero y julio del presente año han registrado un desembolso de S/ 366.6 millones, lo que significa haber logrado un nivel de ejecución de gasto del 55%.

Las obras ejecutadas por las empresas de distribución eléctrica de la Corporación Fonafe en los siete primeros meses del año vienen mejorando la calidad de vida de más de 2 millones de personas. Las inversiones abarcan obras de diversa índole, entre las que destacan:

- Ampliaciones de subestaciones eléctricas
- Implementación de líneas de transmisión
- Mejoramiento de sistemas eléctricos
- Modernización de alumbrado público
- Ampliación de redes eléctricas

Ello redundará en favor de los más de 5.5 millones de clientes atendidos a la fecha a nivel nacional.\n

Las inversiones FBK comprenden la inversión en proyectos de inversión (adquisiciones de bienes de capital, mejoras en activos que aumentan su productividad o vida útil) y en gastos de capital no ligados a proyectos (soporte a las actividades operativas, tales como infraestructura administrativa y tecnológica).`,

      imageSrc: "https://s.france24.com/media/display/d1676b6c-0770-11e9-8595-005056a964fe/w:1024/p:16x9/news_1920x1080.png",
      id: id,
      date: new Date()

    }
  }
}
