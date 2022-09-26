const sizes = {
  small: "sm",
  middle: "md",
  large: "lg",
};

const weight = {
  light: "light",
  normal: "normal",
  heavy: "heavy",
};

function Parcel(size, name, weight) {
  this.size = size;
  this.name = name;
  this.weight = weight;
}

const parcel = {
  weight: weight.normal,
  size: sizes.large,
  name: "Table",
};

function Post() {
  this.parcels = {};
  this.getParcelsBy = (key, value) => {
    return Object.values(this.parcels).filter((parcel) => {
      return parcel[key] === value;
    });
  };

  const init = () => {
    const getters = [
      {
        value: sizes.large,
        key: "size",
        name: "largeParcels",
      },
      {
        value: sizes.middle,
        key: "size",
        name: "middleParcels",
      },
      {
        value: sizes.small,
        key: "size",
        name: "smallParcels",
      },
      {
        value: weight.heavy,
        key: "weight",
        name: "heavyParcels",
      },
      {
        value: weight.normal,
        key: "weight",
        name: "normalParcels",
      },
      {
        value: weight.light,
        key: "weight",
        name: "lightParcels",
      },
      {
        value: true,
        key: "isFastDelivery",
        name: "lightParcels",
      },
    ];

    getters.forEach(({ name, key, value }) => {
      Object.defineProperty(this, name, {
        get() {
          return this.getParcelsBy(key, value);
        },
      });
    });
  };

  init();

  Object.defineProperty(this, "length", {
    get() {
      return Object.keys(this.parcels).length;
    },
  });

  this.addParcel = (parcel) => {
    this.parcels[this.length] = parcel;
  };
}

const post = new Post();
post.addParcel(new Parcel(sizes.small, "mirinda", weight.light));
post.addParcel(new Parcel(sizes.small, "phones", weight.light));
post.addParcel(new Parcel(sizes.large, "chicken", weight.heavy));
post.addParcel(new Parcel(sizes.middle, "books", weight.normal));
post.addParcel(new Parcel(sizes.large, "windows", weight.normal));
