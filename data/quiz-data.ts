export interface CourierRun {
  runNumber: string;
  wholeStreets: string[];
  splitStreets: SplitStreet[];
}

export interface SplitStreet {
  streetName: string;
  numberRange?: {
    min: number;
    max: number;
  };
  oddEven?: "odd" | "even";
  specificNumbers?: number[];
}

export interface QuizQuestion {
  address: string;
  correctAnswer: string;
  options: string[];
}

const courierRuns: CourierRun[] = [
  {
    runNumber: "Run 1",
    wholeStreets: [
      "Airport Drive",
      "Alderson Drive",
      "Armstrong Street",
      "Astelia Court",
      "Azara Court",
      "Banksia Grove",
      "Boronia Court",
      "Bouvardia Avenue",
      "Buttonwood Court",
      "Cabbage Tree Way",
      "Clearview Drive",
      "Coprosma Court",
      "Denver Place",
      "Dogwood Way",
      "Hydrangea Lane",
      "Jefferson Crescent",
      "Leander Place",
      "Madison Avenue",
      "McGregor Street",
      "Montana Way",
      "Neil Lane",
      "Noel Rodgers Place",
      "Palliser Place",
      "Paradise Place",
      "Pinedale Parade",
      "Pukatea Place",
      "Purdie Place",
      "Railway Road",
      "Seaforth Avenue",
      "Setters Line",
      "Terry Crescent",
      "The Cutting Way",
      "Valor Drive",
      "Virginia Grove",
      "Wairaka Place"
    ],
    splitStreets: [
      {
        streetName: "Milson Line",
        numberRange: { min: 49, max: 227 },
        oddEven: "odd",
      },
      {
        streetName: "Tremaine Avenue",
        numberRange: { min: 999, max: 1057 },
      },
    ],
  },
  {
    runNumber: "Run 2",
    wholeStreets: [
      "Pahiatua Street",
      "Redwood Grove",
      "Riverstone Grove",
      "Ross Place",
      "Roxburgh Crescent",
      "Surrey Crescent",
      "Swansea Street",
      "Tern Place",
      "The Glen",
      "Tilbury Avenue",
      "Tuere Lane",
      "Village Court",
      "Virtue Place",
      "Wallace Place",
      "Waterloo Crescent",
      "Wigan Place",
      "Winston Avenue",
      "Woodstock Lane",
      "Worsfold Lane"
    ],
    splitStreets: [
      {
        streetName: "Centennial Drive",
        numberRange: { min: 3, max: 19 },
        oddEven: "odd",
      },
      {
        streetName: "Centennial Drive",
        numberRange: { min: 6, max: 30 },
        oddEven: "even",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 535, max: 591 },
        oddEven: "odd",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 536, max: 600 },
        oddEven: "even",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 549, max: 605 },
        oddEven: "odd",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 548, max: 606 },
        oddEven: "even",
      },
    ],
  },
  {
    runNumber: "Run 3",
    wholeStreets: [
      "Alfred Street",
      "Rata Street",
      "Andrew Avenue",
      "Avon Terrace",
      "Barnes Court",
      "Battersea Place",
      "Belfast Place",
      "Bristol Crescent",
      "Browning Place",
      "Cardrona Close",
      "Celtic Court",
      "Charleville Court",
      "Chertsey Court",
      "Clendon Court",
      "Clyde Crescent",
      "Coromandel Court",
      "Elliott Street",
      "Esk Street",
      "Forth Terrace",
      "Fraser Court",
      "Freyberg Street",
      "Gibson Court",
      "Haydon Street",
      "Hinton Place",
      "Hulme Street",
      "Humber Street",
      "Jarrett Court",
      "Karina Terrace",
      "Kauri Street",
      "Kings Court",
      "Kipling Street",
      "Koromiko Avenue",
      "Lancewood Lane",
      "Lansdowne Court",
      "Larsen Court",
      "Margaret Street",
      "Mersey Terrace",
      "Milton Street",
      "Moheke Avenue",
      "Mowlen Terrace",
      "Newhaven Place",
      "Ngarimu Street",
      "Northbrook Court",
      "Piper Place",
      "Plymouth Street",
      "Puriri Terrace",
      "Rainforth Street",
      "Rangiora Avenue",
      "Severn Terrace",
      "Shelley Street",
      "Sierra Court",
      "Terrace Street",
      "Thames Street",
      "Tweed Street",
      "Tyne Street",
      "Upham Terrace",
      "Upper Main Street",
      "Vogel Street",
      "Waimarama Court",
      "Weber Place",
      "Weston Avenue",
      "Wharenui Terrace",
      "Woodfield Avenue"
    ],
    splitStreets: [
      {
        streetName: "Featherston Street",
        numberRange: { min: 496, max: 660 },
        oddEven: "even",
      },
      {
        streetName: "Featherston Street",
        numberRange: { min: 495, max: 657 },
        oddEven: "odd",
      },
      {
        streetName: "Keith Street",
        numberRange: { min: 1, max: 35 },
        oddEven: "odd",
      },
      {
        streetName: "Keith Street",
        numberRange: { min: 6, max: 122 },
        oddEven: "even",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 765, max: 899 },
      },
      {
        streetName: "Ruahine Street",
        numberRange: { min: 5, max: 249 },
        oddEven: "odd",
      },
      {
        streetName: "Tremaine Avenue",
        numberRange: { min: 788, max: 1050 },
      },
    ],
  },
  {
    runNumber: "Run 4",
    wholeStreets: [
      "Adrien Way",
      "Aintree Crescent",
      "Akaroa Avenue",
      "Alaska Court",
      "Anaru Place",
      "Anzio Place",
      "Ashburn Lane",
      "Astrid Court",
      "Austin Place",
      "Belgrave Place",
      "Berkley Place",
      "Bradford Place",
      "Buick Crescent",
      "Busby Place",
      "Capri Place",
      "Carbine Court",
      "Carter Crescent",
      "Caulfield Place",
      "Cheltenham Lane",
      "Christian Place",
      "Coronet Place",
      "Cramer Place",
      "Dittmer Drive",
      "Doncaster Court",
      "Lane Place",
      "Laurel Place",
      "Leigh Place",
      "Lifford Place",
      "London Terrace",
      "Long Melford Road",
      "Mana Place",
      "Mangatainoka Lane",
      "Marsden Place",
      "Maxwells Line",
      "McDonald Place",
      "Mudgway Place",
      "Nairn Crescent",
      "Newbury Street",
      "Newmarket Lane",
      "Ngahere Court",
      "Otira Place",
      "Panako Place",
      "Paul Place",
      "Perth Place",
      "Pitama Road",
      "Purnell Court",
      "Racecourse Road",
      "Rakino Place",
      "Rochester Street"
    ],
    splitStreets: [
      {
        streetName: "College Street",
        numberRange: { min: 2, max: 182 },
        oddEven: "even",
      },
      {
        streetName: "College Street",
        numberRange: { min: 1, max: 189 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 5",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Featherston Street",
        numberRange: { min: 150, max: 240 },
        oddEven: "even",
      },
      {
        streetName: "Featherston Street",
        numberRange: { min: 151, max: 229 },
        oddEven: "odd",
      },
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 5, max: 35 },
      },
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 43, max: 47 },
      },
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 55, max: 413 },
        oddEven: "odd",
      },
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 104, max: 446 },
        oddEven: "even",
      },
      {
        streetName: "Tremaine Avenue",
        numberRange: { min: 396, max: 528 },
      },
    ],
  },
  {
    runNumber: "Run 6",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Milson Line",
        numberRange: { min: 4, max: 24 },
        oddEven: "even",
      },
      {
        streetName: "Milson Line",
        numberRange: { min: 1, max: 25 },
        oddEven: "odd",
      },
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 427, max: 501 },
        oddEven: "odd",
      },
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 474, max: 548 },
        oddEven: "even",
      },
      {
        streetName: "Ruahine Street",
        numberRange: { min: 2, max: 116 },
        oddEven: "even",
      },
      {
        streetName: "Tremaine Avenue",
        numberRange: { min: 536, max: 774 },
        oddEven: "even",
      },
      {
        streetName: "Tremaine Avenue",
        numberRange: { min: 541, max: 931 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 7",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Featherston Street",
        numberRange: { min: 244, max: 418 },
      },
      {
        streetName: "Main Street",
        numberRange: { min: 476, max: 680 },
        oddEven: "even",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 473, max: 683 },
        oddEven: "odd",
      },
      {
        streetName: "Princess Street",
        numberRange: { min: 2, max: 72 },
        oddEven: "even",
      },
      {
        streetName: "Princess Street",
        numberRange: { min: 1, max: 61 },
        oddEven: "odd",
      },
      {
        streetName: "The Square",
        numberRange: { min: 86, max: 142 },
        oddEven: "even",
      },
      {
        streetName: "The Square",
        numberRange: { min: 85, max: 139 },
        oddEven: "odd",
      },
      {
        streetName: "Victoria Avenue",
        numberRange: { min: 4, max: 50 },
        oddEven: "even",
      },
      {
        streetName: "Victoria Avenue",
        numberRange: { min: 3, max: 49 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 8",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Centennial Drive",
        numberRange: { min: 38, max: 200 },
        oddEven: "even",
      },
      {
        streetName: "Centennial Drive",
        numberRange: { min: 39, max: 179 },
        oddEven: "odd",
      },
      {
        streetName: "Fitzherbert Avenue",
        numberRange: { min: 262, max: 314 },
        oddEven: "even",
      },
      {
        streetName: "Fitzherbert Avenue",
        numberRange: { min: 261, max: 339 },
        oddEven: "odd",
      },
      {
        streetName: "Summerhill Drive",
        numberRange: { min: 28, max: 170 },
        oddEven: "even",
      },
      {
        streetName: "Summerhill Drive",
        numberRange: { min: 97, max: 157 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 9",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Church Street",
        numberRange: { min: 362, max: 530 },
        oddEven: "even",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 367, max: 529 },
        oddEven: "odd",
      },
      {
        streetName: "College Street",
        numberRange: { min: 371, max: 491 },
        oddEven: "odd",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 360, max: 544 },
        oddEven: "even",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 349, max: 541 },
        oddEven: "odd",
      },
      {
        streetName: "Fitzherbert Avenue",
        numberRange: { min: 2, max: 140 },
        oddEven: "even",
      },
      {
        streetName: "Fitzherbert Avenue",
        numberRange: { min: 1, max: 145 },
        oddEven: "odd",
      },
      {
        streetName: "Princess Street",
        numberRange: { min: 78, max: 132 },
        oddEven: "even",
      },
      {
        streetName: "Princess Street",
        numberRange: { min: 63, max: 117 },
        oddEven: "odd",
      },
      {
        streetName: "Victoria Avenue",
        numberRange: { min: 52, max: 152 },
        oddEven: "even",
      },
      {
        streetName: "Victoria Avenue",
        numberRange: { min: 61, max: 149 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 10",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "James Line",
        numberRange: { min: 70, max: 176 },
        oddEven: "even",
      },
      {
        streetName: "James Line",
        numberRange: { min: 79, max: 181 },
        oddEven: "odd",
      },
      {
        streetName: "Keith Street",
        numberRange: { min: 124, max: 186 },
        oddEven: "even",
      },
      {
        streetName: "Keith Street",
        numberRange: { min: 137, max: 185 },
        oddEven: "odd",
      },
      {
        streetName: "Napier Road",
        numberRange: { min: 61, max: 115 },
      },
      {
        streetName: "Roberts Line",
        numberRange: { min: 38, max: 142 },
        oddEven: "even",
      },
      {
        streetName: "Roberts Line",
        numberRange: { min: 29, max: 135 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 11",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Church Street",
        numberRange: { min: 90, max: 338 },
        oddEven: "even",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 93, max: 341 },
        oddEven: "odd",
      },
      {
        streetName: "Cook Street",
        numberRange: { min: 50, max: 142 },
        oddEven: "even",
      },
      {
        streetName: "Cook Street",
        numberRange: { min: 69, max: 141 },
        oddEven: "odd",
      },
      {
        streetName: "Cuba Street",
        numberRange: { min: 142, max: 302 },
        oddEven: "even",
      },
      {
        streetName: "Cuba Street",
        numberRange: { min: 135, max: 265 },
        oddEven: "odd",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 94, max: 332 },
        oddEven: "even",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 85, max: 345 },
        oddEven: "odd",
      },
      {
        streetName: "Linton Street",
        numberRange: { min: 2, max: 92 },
        oddEven: "even",
      },
      {
        streetName: "Linton Street",
        numberRange: { min: 27, max: 89 },
        oddEven: "odd",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 212, max: 362 },
        oddEven: "even",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 303, max: 365 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 12",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Albert Street",
        numberRange: { min: 3, max: 105 },
      },
      {
        streetName: "Featherston Street",
        numberRange: { min: 424, max: 476 },
        oddEven: "even",
      },
      {
        streetName: "Featherston Street",
        numberRange: { min: 263, max: 481 },
        oddEven: "odd",
      },
      {
        streetName: "Heretaunga Street",
        numberRange: { min: 4, max: 162 },
        oddEven: "even",
      },
      {
        streetName: "Heretaunga Street",
        numberRange: { min: 244, max: 302 },
        oddEven: "even",
      },
      {
        streetName: "Heretaunga Street",
        numberRange: { min: 65, max: 159 },
        oddEven: "odd",
      },
      {
        streetName: "Heretaunga Street",
        numberRange: { min: 245, max: 303 },
        oddEven: "odd",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 691, max: 759 },
      },
      {
        streetName: "Milson Line",
        numberRange: { min: 30, max: 226 },
        oddEven: "even",
      },
      {
        streetName: "Ruahine Street",
        numberRange: { min: 118, max: 118 },
        oddEven: "even",
      },
      {
        streetName: "Ruahine Street",
        numberRange: { min: 160, max: 248 },
        oddEven: "even",
      },
      {
        streetName: "Russell Street",
        numberRange: { min: 2, max: 112 },
        oddEven: "even",
      },
      {
        streetName: "Russell Street",
        numberRange: { min: 1, max: 111 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 13",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "James Line",
        numberRange: { min: 2, max: 68 },
        oddEven: "even",
      },
      {
        streetName: "James Line",
        numberRange: { min: 3, max: 73 },
        oddEven: "odd",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 600, max: 632 },
        oddEven: "even",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 601, max: 633 },
        oddEven: "odd",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 614, max: 652 },
        oddEven: "even",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 617, max: 645 },
        oddEven: "odd",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 688, max: 894 },
      },
      {
        streetName: "Napier Road",
        numberRange: { min: 4, max: 160 },
      },
      {
        streetName: "Samuel Place",
        numberRange: { min: 90, max: 178 },
        oddEven: "even",
      },
      {
        streetName: "Samuel Place",
        numberRange: { min: 91, max: 159 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 15",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Botanical Road",
        numberRange: { min: 2, max: 248 },
        oddEven: "even",
      },
      {
        streetName: "Botanical Road",
        numberRange: { min: 1, max: 245 },
        oddEven: "odd",
      },
      {
        streetName: "Cuba Street",
        numberRange: { min: 6, max: 138 },
        oddEven: "even",
      },
      {
        streetName: "Cuba Street",
        numberRange: { min: 3, max: 135 },
        oddEven: "odd",
      },
      {
        streetName: "Featherston Street",
        numberRange: { min: 16, max: 148 },
        oddEven: "even",
      },
      {
        streetName: "Featherston Street",
        numberRange: { min: 3, max: 145 },
        oddEven: "odd",
      },
      {
        streetName: "Main Street",
        numberRange: { min: 159, max: 295 },
      },
    ],
  },
  {
    runNumber: "Run 18",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Pioneer Highway",
        numberRange: { min: 490, max: 692 },
        oddEven: "even",
      },
      {
        streetName: "Pioneer Highway",
        numberRange: { min: 293, max: 685 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 25",
    wholeStreets: [
      "Abby Road",
      "Anzac Avenue",
      "Aokautere Drive",
      "Atlantic Drive",
      "Butler Place",
      "Cashmere Drive",
      "Cliff Road",
      "Conway Road",
      "Corsica Court",
      "Coutts Way",
      "Cyprus Place",
      "Edenmore Terrace",
      "Erewon Road",
      "Flux Road",
      "Fosters Road",
      "Gibraltar Way",
      "Gunners Lane",
      "Hansen Road",
      "Harts Road",
      "Johnstone Drive",
      "Kebbles Drive",
      "Kilkenny Place",
      "Lourie Way",
      "Lowe Road",
      "Mediterranean Grove",
      "Monaco Grove",
      "Pacific Drive",
      "Powells Avenue",
      "Putticks Road",
      "Ron Place",
      "Ruapehu Drive",
      "Sardinia Grove",
      "Silicon Way",
      "Silkwood Place",
      "Solidiers Lane",
      "St Heliers Grove",
      "Stratford Court",
      "Sycamore Crescent",
      "The Strand",
      "Varsity Heights",
      "Vaucluse Heights",
      "Woodgate Court"
    ],
    splitStreets: [
      {
        streetName: "Camp Road",
        oddEven: "even",
      },
      {
        streetName: "Summerhill Drive",
        numberRange: { min: 15, max: 37 },
      },
    ],
  },
  {
    runNumber: "Run 27",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Rangitikei Street",
        numberRange: { min: 464, max: 470 },
        oddEven: "even",
      },
    ],
  },
  {
    runNumber: "Run 30",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Botanical Road",
        numberRange: { min: 408, max: 454 },
        oddEven: "even",
      },
      {
        streetName: "College Street",
        numberRange: { min: 196, max: 510 },
        oddEven: "even",
      },
      {
        streetName: "College Street",
        numberRange: { min: 191, max: 361 },
        oddEven: "odd",
      },
      {
        streetName: "Cook Street",
        numberRange: { min: 148, max: 178 },
        oddEven: "even",
      },
      {
        streetName: "Cook Street",
        numberRange: { min: 143, max: 189 },
        oddEven: "odd",
      },
      {
        streetName: "Fitzherbert Avenue",
        numberRange: { min: 152, max: 256 },
        oddEven: "even",
      },
      {
        streetName: "Fitzherbert Avenue",
        numberRange: { min: 161, max: 247 },
        oddEven: "odd",
      },
      {
        streetName: "Linton Street",
        numberRange: { min: 94, max: 128 },
        oddEven: "even",
      },
      {
        streetName: "Linton Street",
        numberRange: { min: 91, max: 131 },
        oddEven: "odd",
      },
      {
        streetName: "Victoria Avenue",
        numberRange: { min: 158, max: 266 },
        oddEven: "even",
      },
      {
        streetName: "Victoria Avenue",
        numberRange: { min: 155, max: 265 },
        oddEven: "odd",
      },
    ],
  },
  {
    runNumber: "Run 100",
    wholeStreets: [],
    splitStreets: [
      {
        streetName: "Botanical Road",
        numberRange: { min: 282, max: 396 },
        oddEven: "even",
      },
      {
        streetName: "Botanical Road",
        numberRange: { min: 281, max: 391 },
        oddEven: "odd",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 22, max: 84 },
        oddEven: "even",
      },
      {
        streetName: "Church Street",
        numberRange: { min: 21, max: 75 },
        oddEven: "odd",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 30, max: 86 },
        oddEven: "even",
      },
      {
        streetName: "Ferguson Street",
        numberRange: { min: 23, max: 81 },
        oddEven: "odd",
      },
    ],
  },
];

function getRunForAddress(address: string): string | null {
  const addressParts = address.trim().split(" ");
  const firstPart = addressParts[0];
  const isNumberFirst = !isNaN(parseInt(firstPart, 10));
  
  let streetName: string;
  let houseNumber: number | null = null;
  
  if (isNumberFirst) {
    houseNumber = parseInt(firstPart, 10);
    streetName = addressParts.slice(1).join(" ");
  } else {
    streetName = address;
  }

  for (const run of courierRuns) {
    if (run.wholeStreets.some(street => street.toLowerCase() === streetName.toLowerCase())) {
      return run.runNumber;
    }

    for (const splitStreet of run.splitStreets) {
      if (splitStreet.streetName.toLowerCase() === streetName.toLowerCase()) {
        if (houseNumber === null) continue;

        if (splitStreet.numberRange) {
          const { min, max } = splitStreet.numberRange;
          if (houseNumber < min || houseNumber > max) continue;
        }

        if (splitStreet.oddEven) {
          const isOdd = houseNumber % 2 === 1;
          if (splitStreet.oddEven === "odd" && !isOdd) continue;
          if (splitStreet.oddEven === "even" && isOdd) continue;
        }

        if (splitStreet.specificNumbers && !splitStreet.specificNumbers.includes(houseNumber)) {
          continue;
        }

        return run.runNumber;
      }
    }
  }

  return null;
}

function generateRandomAddress(): { address: string; correctRun: string } {
  const allRuns = courierRuns;
  const randomRun = allRuns[Math.floor(Math.random() * allRuns.length)];
  
  const useWholeStreet = Math.random() < 0.4;
  
  if (useWholeStreet && randomRun.wholeStreets.length > 0) {
    const randomStreet = randomRun.wholeStreets[Math.floor(Math.random() * randomRun.wholeStreets.length)];
    return {
      address: randomStreet,
      correctRun: randomRun.runNumber,
    };
  } else if (randomRun.splitStreets.length > 0) {
    const randomSplitStreet = randomRun.splitStreets[Math.floor(Math.random() * randomRun.splitStreets.length)];
    
    let houseNumber: number;
    
    if (randomSplitStreet.numberRange) {
      const { min, max } = randomSplitStreet.numberRange;
      houseNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      
      if (randomSplitStreet.oddEven === "odd" && houseNumber % 2 === 0) {
        houseNumber = Math.min(houseNumber + 1, max);
      } else if (randomSplitStreet.oddEven === "even" && houseNumber % 2 === 1) {
        houseNumber = Math.max(houseNumber - 1, min);
      }
    } else if (randomSplitStreet.oddEven) {
      houseNumber = Math.floor(Math.random() * 200) + 1;
      if (randomSplitStreet.oddEven === "odd" && houseNumber % 2 === 0) {
        houseNumber += 1;
      } else if (randomSplitStreet.oddEven === "even" && houseNumber % 2 === 1) {
        houseNumber += 1;
      }
    } else {
      houseNumber = Math.floor(Math.random() * 200) + 1;
    }
    
    return {
      address: `${houseNumber} ${randomSplitStreet.streetName}`,
      correctRun: randomRun.runNumber,
    };
  }
  
  const fallbackRun = allRuns.find(run => run.wholeStreets.length > 0) || allRuns[0];
  const fallbackStreet = fallbackRun.wholeStreets[0] || "Cuba Street";
  
  return {
    address: fallbackStreet,
    correctRun: fallbackRun.runNumber,
  };
}

function generateWrongOptions(correctRun: string, count: number = 3): string[] {
  const allRunNumbers = courierRuns.map(run => run.runNumber);
  const wrongOptions = allRunNumbers.filter(run => run !== correctRun);
  
  const shuffled = wrongOptions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function generateQuizQuestions(count: number): QuizQuestion[] {
  const questions: QuizQuestion[] = [];
  const usedAddresses = new Set<string>();
  
  for (let i = 0; i < count; i++) {
    let attempt = 0;
    let questionData: { address: string; correctRun: string };
    
    do {
      questionData = generateRandomAddress();
      attempt++;
    } while (usedAddresses.has(questionData.address) && attempt < 10);
    
    usedAddresses.add(questionData.address);
    
    const wrongOptions = generateWrongOptions(questionData.correctRun);
    const allOptions = [questionData.correctRun, ...wrongOptions];
    
    const shuffledOptions = allOptions.sort(() => Math.random() - 0.5);
    
    questions.push({
      address: questionData.address,
      correctAnswer: questionData.correctRun,
      options: shuffledOptions,
    });
  }
  
  return questions;
}

export { courierRuns, getRunForAddress };
