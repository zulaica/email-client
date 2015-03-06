EmailClient.InboxRoute = Ember.Route.extend({
  beforeModel: function() {
    this.store.push('email', {
      id: 1,
      subject: "My heartbeat are killing me!",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 2,
      subject: "Antidote for crocodile",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 3,
      subject: "John Mccain Denies Allegations That He Is A Politician",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 4,
      subject: "Sarah Jessica Parker Arrested For Gross Negligee",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 5,
      subject: "Dating girls 20-60 years old",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 6,
      subject: "Britney Spears To Donate Eggs For Darfur",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 7,
      subject: "IT consultant of perfect love making art.",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 8,
      subject: "Your wife need your attention? Solve all the problems with IT.",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 9,
      subject: "I learned what females do on a farm. NEVER leave them there abandoned!",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
    this.store.push('email', {
      id: 10,
      subject: "Dimensional Warp Generator Needed ork uw g xmufucpebz",
      sender: "totally-not-spam" + Math.floor(Math.random() * 100) +"@spam.spam",
      recipient: "yourname@domain.tld",
      body: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis, erat quis facilisis pellentesque, tellus neque sagittis nulla, nec efficitur lacus risus ultricies justo. Aliquam vitae enim lectus. Vivamus sed tellus eget mauris maximus cursus. Aliquam diam erat, rhoncus ut facilisis eget, rutrum at erat. Aliquam erat volutpat. Aliquam quis lorem sem. Vivamus eu iaculis sapien, eu vulputate mi. Donec a massa et lorem vulputate iaculis sit amet a lacus. Integer ultricies eleifend lectus, quis pulvinar ante ornare sed. Nulla tristique sem et varius ultrices. Etiam vestibulum molestie pulvinar.</p><p>Integer eget lacus sit amet est sollicitudin pellentesque. Ut maximus consectetur erat, non feugiat justo eleifend nec. Vestibulum pellentesque feugiat massa et ultrices. Integer eu placerat ante, et volutpat ipsum. Ut dictum, dui nec facilisis lobortis, augue est aliquet mauris, id dignissim sapien ante volutpat mauris. Donec aliquam, felis eget pellentesque pulvinar, diam risus hendrerit nibh, ac placerat leo libero sed sem. Pellentesque vitae faucibus sem, eu finibus erat. Ut scelerisque quam et fermentum pellentesque. Duis feugiat efficitur mauris id gravida.</p>",
      status: "received"
    });
  },
  model: function() {
    var isInbox = true;
    return this.store.filter('email', function(email) {
      return (email.get("status") === "received");
    });
  }
});
