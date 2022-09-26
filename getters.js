const sizes = {
  small: "sm",
  middle: "md",
  large: "lg",
};

const post = {
  parcels: {
    0: {
      name: "mirinda",
      size: sizes.small,
    },
    3: {
      name: "phones",
      size: sizes.small,
    },
    6: {
      name: "chicken",
      size: sizes.large,
    },
    873: {
      name: "books",
      size: sizes.middle,
    },
    634: {
      name: "windows",
      size: sizes.large,
    },
  },
  getParcelsBySize(parcelSize) {
    return Object.values(this.parcels).filter(({ size }) => {
      return size === parcelSize;
    });
  },
  init() {
    const getters = [
      {
        size: sizes.large,
        name: "largeParcels",
      },
      {
        size: sizes.middle,
        name: "middleParcels",
      },
      {
        size: sizes.small,
        name: "smallParcels",
      },
    ];

    getters.forEach(({ name, size }) => {
      Object.defineProperty(this, name, {
        get() {
          return this.getParcelsBySize(size);
        },
      });
    });
  },
};
