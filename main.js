// Services toggle: swaps the category card and item list between Painting and Renovation.
(function () {
  var cats = {
    painting: {
      title: 'Painting Services',
      blurb: 'Interior and exterior painting with the prep that makes it last — repairs, sanding, priming and clean lines throughout.',
      items: ['Interior painting', 'Exterior painting', 'Residential painting', 'Commercial painting', 'Accent & feature walls', 'Ceiling painting', 'Trim, baseboard & molding', 'Door & cabinet painting/refinishing', 'Deck & fence painting/staining', 'Drywall repair & preparation', 'Surface prep, sanding & priming', 'Wallpaper removal', 'Pressure washing before exterior paint', 'Color consultation & paint selection']
    },
    reno: {
      title: 'Renovation & Remodeling',
      blurb: 'Kitchens, baths, floors and full interiors — plus fast, reliable turnovers for rental owners and property managers.',
      items: ['Kitchen renovations', 'Bathroom renovations', 'Full interior renovations', 'Flooring installation/replacement', 'Drywall installation & repair', 'Interior wall modifications', 'Baseboard, trim & molding installation', 'Door installation/replacement', 'Cabinet installation/refinishing', 'Backsplash & tile installation', 'Countertop upgrades', 'Lighting fixture upgrades', 'Closet renovations', 'Basement/garage renovations', 'Rental property turnovers', 'Home refreshes & make-ready services']
    }
  };

  var section = document.getElementById('services');
  if (!section) return;
  var buttons = section.querySelectorAll('[data-tab]');
  var title = document.getElementById('cat-title');
  var blurb = document.getElementById('cat-blurb');
  var list = document.getElementById('cat-list');

  function show(tab) {
    var cat = cats[tab];
    if (!cat) return;
    section.setAttribute('data-active', tab);
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-tab') === tab));
    });
    title.textContent = cat.title;
    blurb.textContent = cat.blurb;
    list.textContent = '';
    cat.items.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { show(b.getAttribute('data-tab')); });
  });
})();
