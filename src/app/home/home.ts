import { Component } from '@angular/core';
import { $ } from 'jquery';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  inicialize(callback?: () => void){
    $(".background-filter").fadeOut(500);
    $('.backgroung-pic').css({
      'transition': 'background-size 0.8s ease',
      'background-size': '120%'
    });
    $('.about-me').css('display', 'flex').hide().fadeIn(500);
    $('.projects').fadeIn(500, () => { 
      callback ?.();

    });

    this.criaCarrosselMarquee("#marquee1", false)
    this.criaCarrosselMarquee("#marquee2", true)


  }

  rolarParaProjetos() {
    $('html, body').scrollTop($('.projects').offset()!.top);
  }




  criaCarrosselMarquee(seletor: string, isReverse: boolean){
    const swiper = new Swiper(seletor, {
     modules: [Autoplay, EffectCoverflow],
     slidesPerView:'auto',
     spaceBetween: 50,
     loop: true,
     speed: 10000,
     allowTouchMove: true,
     autoplay:{
       delay: 0,
       disableOnInteraction: false,
       reverseDirection: isReverse,
     },
     effect: 'coverflow',
     coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      scale: 0.95,
      slideShadows: false,
     }
   
   });

   console.log('Swiper criado:', seletor, swiper);

  }
  
  ngAfterViewInit(){
    
   }

  
  

}
