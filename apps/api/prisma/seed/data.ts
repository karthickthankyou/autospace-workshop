import { generateSlots } from './util'
import { Prisma } from '@prisma/client'

export const garagesSample: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Manhattan Garage 1',
    description: 'Secure parking in the heart of Manhattan',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-parking-garage-in-brooklyn-new-york-the-picture-should-featu-561631306_qir7we.jpg',
      ],
    },

    Address: {
      create: {
        address: '123 5th Ave, New York, NY 10001',
        lat: 40.712776,
        lng: -74.005974,
      },
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
  },
]
export const garages: Prisma.GarageCreateInput[] = [
  {
    displayName: 'Brooklyn Garage 1',
    description: 'Affordable parking in Brooklyn',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/create-a-cover-image-of-an-affordable-and-clean-parking-garage-in-brooklyn-new-york-the-picture-sh-825512221_kzvig6.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
      ],
    },
    Address: {
      create: {
        address: '456 Court St, Brooklyn, NY 11231',
        lat: 40.678178,
        lng: -73.944158,
      },
    },
  },
  {
    displayName: 'Queens Garage 1',
    description: 'Convenient parking in Queens',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/design-a-cover-picture-for-a-convenient-parking-garage-in-queens-new-york-the-image-should-show-a--976407210_la43y2.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '789 Queens Blvd, Queens, NY 11373',
        lat: 40.728224,
        lng: -73.794852,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 2',
    description: 'Secure parking near Central Park',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171734/autospace/design-a-cover-picture-for-a-convenient-parking-garage-in-queens-new-york-the-image-should-show-a--639233464_tuskex.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '101 Central Park West, New York, NY 10023',
        lat: 40.7812,
        lng: -73.9665,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 2',
    description: 'Spacious parking in Brooklyn Heights',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/design-a-cover-picture-for-a-parking-garage-in-long-island-city-queens-new-york-the-image-should--184920453_v8umyi.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '202 Atlantic Ave, Brooklyn, NY 11201',
        lat: 40.6912,
        lng: -73.9936,
      },
    },
  },
  {
    displayName: 'Queens Garage 2',
    description: 'Safe parking in Flushing',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/create-a-cover-image-of-a-spacious-parking-garage-in-brooklyn-heights-new-york-the-picture-should--539597916_obi5kl.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '303 Main St, Flushing, NY 11354',
        lat: 40.759,
        lng: -73.8303,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 3',
    description: 'Parking near Times Square',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/design-a-cover-picture-for-a-parking-garage-in-long-island-city-queens-new-york-the-image-should--110448605_bqjzmf.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '1515 Broadway, New York, NY 10036',
        lat: 40.758,
        lng: -73.9855,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 3',
    description: 'Secure parking in Williamsburg',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/render-a-cover-picture-of-a-secure-parking-garage-near-central-park-in-manhattan-new-york-the-imag-736153979_kvpczt.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '404 Bedford Ave, Brooklyn, NY 11249',
        lat: 40.7081,
        lng: -73.9571,
      },
    },
  },
  {
    displayName: 'Queens Garage 3',
    description: 'Affordable parking in Astoria',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716171733/autospace/create-a-cover-image-of-an-affordable-clean-outdoor-parking-garage-in-brooklyn-new-york-the-pict-620611113_ortr3g.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '505 Steinway St, Astoria, NY 11103',
        lat: 40.7592,
        lng: -73.9196,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 4',
    description: 'Parking near Wall Street',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158769/autospace/busy-parking-garage-with-slots-in-newyork-neon-ambiance-abstract-black-oil-gear-mecha-detailed-a_fy51wa.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '75 Wall St, New York, NY 10005',
        lat: 40.7074,
        lng: -74.0104,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 4',
    description: 'Parking near Prospect Park',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-showing-newyork-skyline-haze-ultra-detail_n1hhhz.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '606 Flatbush Ave, Brooklyn, NY 11225',
        lat: 40.6591,
        lng: -73.9626,
      },
    },
  },
  {
    displayName: 'Queens Garage 4',
    description: 'Parking near LaGuardia Airport',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-car-parking-garage-with-slots-wide-angle-haze-ultra-detailed-film-photogr_kst6l1.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '707 Ditmars Blvd, Queens, NY 11370',
        lat: 40.7743,
        lng: -73.8896,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 5',
    description: 'Secure parking in the East Village',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/busy-parking-garage-near-a-newyork-central-park-acrylic-painting-trending-on-pixiv-fanbox-palette-790070610_pptabc.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '808 E 14th St, New York, NY 10009',
        lat: 40.7295,
        lng: -73.9786,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 5',
    description: 'Parking in Greenpoint',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158768/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-wide-angle-haze-ultra-detailed-film-phot_ywuzvl.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '909 Manhattan Ave, Brooklyn, NY 11222',
        lat: 40.7291,
        lng: -73.9542,
      },
    },
  },
  {
    displayName: 'Queens Garage 5',
    description: 'Convenient parking in Forest Hills',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-ultra-modern-techno-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometri_lai3r3.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '1001 Austin St, Forest Hills, NY 11375',
        lat: 40.7207,
        lng: -73.8448,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 6',
    description: 'Parking in Soho',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-modern-techno-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometric-art_rfgxgp.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    Address: {
      create: {
        address: '1101 Broadway, New York, NY 10012',
        lat: 40.7223,
        lng: -73.9987,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 6',
    description: 'Parking in DUMBO',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/busy-parking-garage-with-slots-in-newyork-in-the-hudson-river-low-poly-isometric-art-3d-art-high_os8c09.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'CAR',
        }),
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    Address: {
      create: {
        address: '1202 Water St, Brooklyn, NY 11201',
        lat: 40.7033,
        lng: -73.9903,
      },
    },
  },
  {
    displayName: 'Queens Garage 6',
    description: 'Parking in Jamaica',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/brand-new-modern-techno-parking-garage-with-slots-showing-newyork-skyline-with-no-cars-low-poly-i_ikyidk.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '1303 Jamaica Ave, Jamaica, NY 11432',
        lat: 40.7028,
        lng: -73.7925,
      },
    },
  },
  {
    displayName: 'Manhattan Garage 7',
    description: 'Parking near the UN Headquarters',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158767/autospace/busy-parking-garage-with-slots-in-newyork-outer-space-vanishing-point-super-highway-high-speed-_wnpn6u.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
        ...generateSlots({
          type: 'CAR',
        }),
      ],
    },
    Address: {
      create: {
        address: '1401 1st Ave, New York, NY 10016',
        lat: 40.7489,
        lng: -73.968,
      },
    },
  },
  {
    displayName: 'Brooklyn Garage 7',
    description: 'Parking in Park Slope',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158766/autospace/busy-parking-garage-near-a-newyork-central-park-acrylic-painting-trending-on-pixiv-fanbox-palette_buv6ks.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BIKE',
        }),
      ],
    },
    Address: {
      create: {
        address: '1504 7th Ave, Brooklyn, NY 11215',
        lat: 40.6681,
        lng: -73.9822,
      },
    },
  },
  {
    displayName: 'Queens Garage 7',
    description: 'Parking in Long Island City',
    Company: { connect: { id: 1 } },
    images: {
      set: [
        'https://res.cloudinary.com/thankyou/image/upload/v1716158766/autospace/multistorey-parking-garage-with-slots-showing-newyork-skyline-low-poly-isometric-art-3d-art-hig_1_pbgzgi.jpg',
      ],
    },
    Slots: {
      create: [
        ...generateSlots({
          type: 'BICYCLE',
        }),

        ...generateSlots({
          type: 'CAR',
        }),
        ...generateSlots({
          type: 'HEAVY',
        }),
      ],
    },
    Address: {
      create: {
        address: '1605 Jackson Ave, Long Island City, NY 11101',
        lat: 40.7472,
        lng: -73.9438,
      },
    },
  },
]
