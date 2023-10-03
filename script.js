const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous','next'];
const galleryitem = document.querySelectorAll('.gallery-item');

class Carousel{

    constructor(container,items,controls){
        this.carouselContainer = container;
        this.carouselContainer = controls;
        this.carouselArray = [...items];

    
    }

    updateGallery(){
        this.carouselArray.forEach(e1 => {
            e1.classList.remove('gallery-item-1');
            e1.classList.remove('gallery-item-2');
            e1.classList.remove('gallery-item-3');
            e1.classList.remove('gallery-item-4');
            e1.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0,5).forEach((e1,i) =>{
            e1.classList.add('gallery-item-${i+1}');

        });

    }
    
    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }
    setControls(){
        this.carouselControls.forEach(control =>{
            galleryControlsContainer.appendChild(document.createElement('button')).className = 'gallery-controls-${control}';
            document.querySelector('.gallery-controls-${control}').innerText = control;

        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control =>{
            control.addEventListener('click', e =>{
                e.preventDefault();
                this.setCurrentState(control);
            });
            });

    }

}

const exampleCarousel = new Carousel(galleryContainer, galleryTtems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
