import PClient from '../prisma-client.js';

export default async function() {
  let result;
  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 1,
      locale_country: {
        create: [
          {
            name: "Syria",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "سورية",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 2,
      locale_country: {
        create: [
          {
            name: "Egypt",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "مصر",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 3,
      locale_country: {
        create: [
          {
            name: "Kuwait",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "الكويت",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 4,
      locale_country: {
        create: [
          {
            name: "Bahrain",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "البحرين",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 5,
      locale_country: {
        create: [
          {
            name: "Saudia Arabia",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "السعودية",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 6,
      locale_country: {
        create: [
          {
            name: "Iraq",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "العراق",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 7,
      locale_country: {
        create: [
          {
            name: "Tunisia",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "تونس",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 8,
      locale_country: {
        create: [
          {
            name: "Sudan",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "السودان",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 9,
      locale_country: {
        create: [
          {
            name: "Algeria",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "الجزائر",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 10,
      locale_country: {
        create: [
          {
            name: "Lebanon",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "لبنان",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ],
      }
    }
  });
  console.log(result);

  result = await (new PClient()).getInstance().country.create({
    data: {
      id: 11,
      locale_country: {
        create: [
          {
            name: "Jordan",
            locale: {
              connect: {
                name: 'en-US'
              }
            }
          },
          {
            name: "الأردن",
            locale: {
              connect: {
                name: 'ar-SY'
              }
            }
          }
        ]
      }
    }
  });
  console.log(result);
};
