// https://adventofcode.com
// Using the full map (5x5), what is the lowest total risk of any path from the top left to the bottom right?

function solve(arr) {
    let initMatrix = arr.split('\n').map(r => r.split('').map(Number));
    // prepare bigger x5 matrix
    let matrix = [];
    // multiply 5 times down
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < initMatrix.length; j++) {
            matrix.push(initMatrix[j].map(el => (el + i) <= 9 ? (el + i) : (el + i - 9)));
        }
    }
    // multiply 5 times left
    for (let j = 0; j < matrix.length; j++) {
        for (let i = 1; i < 5; i++) {
            matrix[j] = matrix[j].concat(matrix[j].slice(0, initMatrix.length).map(el => (el + i) <= 9 ? (el + i) : (el + i - 9)));
        }
    }
    // console.log(matrix.map(r => r.join('')));

    // Main program taken from book "Algorithms Notes for Professionals" - Dijkstra algorithm

    // imitate neghbourhood matrix (mapMatrix) aka Adjacency Matrix (because in our case it is too big)
    function getDistance(i, j) {
        let iRow = Math.floor(i / matrix[0].length);
        let iCol = i % matrix[0].length;
        let jRow = Math.floor(j / matrix[0].length);
        let jCol = j % matrix[0].length;
        if (((iRow === jRow) && (iCol === jCol - 1 || iCol === jCol + 1))
            || ((iCol === jCol) && (iRow === jRow - 1 || iRow === jRow + 1))) { // adjacent nodes
            return matrix[jRow][jCol];
        } else {
            return 0;
        }
    }

    let nodeCount = matrix.length * matrix[0].length;
    // console.log(nodeCount);

    // prepare helper arrays
    let distance = [];
    let visitedNodes = [];
    for (let i = 0; i < nodeCount; i++) {
        distance[i] = Infinity;
        visitedNodes[i] = false;
    }
    // start node is 0
    distance[0] = 0;

    // Dijkstra algorithm
    for (let count = 0; count < nodeCount - 1; count++) {
        // find min distance
        let min = Infinity;
        let minIndex = -1;
        for (let i = 0; i < nodeCount; i++) {
            if (visitedNodes[i] === false && distance[i] < min) {
                min = distance[i];
                minIndex = i;
            }
        }
        visitedNodes[minIndex] = true;
        // iterate
        for (let j = 0; j < nodeCount; j++) {
            let dist = getDistance(minIndex, j);
            if (!visitedNodes[j]
                && dist !== 0
                && distance[minIndex] !== Infinity
                && distance[j] > distance[minIndex] + dist) {
                // change min distance
                distance[j] = distance[minIndex] + dist;
            }
        }
    }

    // return path to last element
    return distance[nodeCount - 1];
}

let arr =
`1163751742
1381373672
2136511328
3694931569
7463417111
1319128137
1359912421
3125421639
1293138521
2311944581`;

console.log(solve(arr)); // 315

let arr1 =
`9117126765954991531361287887952293985228945954968719768599113229933177321218646689996911474536732399
9223759878952221676171579911799962387979151219995716217699696127938673831489291395696919969932254989
3541576911128155121299113222129549287959588382622619513719133924151162841285778821288275724961119944
6559133231375896721321444531355921461395859117937697179547219275288311254734149251973431135281269159
1676267562819916395689997881982992332424111621435132141259871861542693472992135679917192317774293128
8249139898167999696294834861387663883158627396569381992149353912931121947619234731324959354465133393
7357179973989691178482439911993891132125811578668959789312252688675899921989453929516192661843919197
4619696469916668547597358979211912998111859144138732228282162541629959265225279899275869118746211343
9953447549477253881796188328361584296836894253681673583298151169375142116172299791649833153199728127
6746781992592141396343937891111468593431876292615191122987921959192389783817917672173839828296719999
9138943966124123291819332993929628638169993945962128621134717995149146955791514983198995871433119683
5819163188981382448685489916367822515728379179272999893692949943661458236153872599999471496119999333
9719423138538191938542116779987951211999142299782419116287869943982658286621789697471829675879813256
9699181696126359195481558113952858412929919992895921913238884884827387595171659273872138379679533591
4993982621563681889939627931477941336198842897212192543931489597746158398239126972227589994828192999
2668741998199239119999431871112499961947311948258837213919913418234952325331319559453486297114898498
1127639615295239423919963661998995345216641693977915377189312819154824929848524771848827299135811811
8368387172119721672588279993639478972511318945923156162231548169532294139882492179811534898824293433
8783398963998292816524668577741241713481448273631853599957636719273318298313692157194988481619656618
2953756999862932299821112664281972119127941479853941118579781188619286791413589268314233994924958219
3721595414181516593884399118999691998316513129665554615276617573518961968693226371972761423831798176
1991694811958961555928271245541174192885889591799159659816793825199835199263296631112197219243356537
8252659533163973655722922376235699717495344481141662818711913921134614993948299831832153649939699789
4991481114394946826713119671181783791173994371435189998492951985177386891322761246115321579813246554
6993696939393598438941581694619582924588531988611314975227128981355369857749392159437189417619958138
7225751179695254891295269821492811764941719129614841461722979146177892692799164911833219318964591993
1333799929651611111256382193432394899779926422481315934699941139983894338331242127329982789394316531
8837481279123791791511293941173182698413296717121319418188693999815688934899313263953713912168172818
2715518187177668788558311556248368519817398834879452159637191987847374713799691792778685985151183163
2259918816199912192975991922626992158899968292179154972119897541183344185545199271144885417852464384
4896829916982297819936288191299877891985362698715838913823274968133179284798911359494966988815194363
2129324329198744948237831472389914912531592491971717854718183863949418918119729287219911292886619189
1475996352848299913587823871858259582986232951986536913528821944878682992979346487316611181412119533
8788926799919935991369615497631215917839967981681589392981969115279279799512993478671319169869899122
9742798185239991887978461721361783139999411599389459591792941389692391799791168329923823769316152161
9173764598521995899121318191935619363699465981899276491962199879816415838819753987163171115742984632
7731396437141244238124389792786718327351712492271297983335154292724119492723817435886686622726342678
9614311948611819439192193259859494925678221999836116159691926837722999383959859996122151658985129189
9122652146647862919899432718742622765273781311965998133187119169243998185815214999623989171991112561
2991149875591574422711878572239393988875812296611285397519895686411153557723621141397739842873293893
2911712393758279823638782882718181196128199519455914978868511911598985898293181751711911218642216689
1793818819191888913194513765514877471931431423191639139334319868989124214159551117358829997181729622
9949357949267411491772862121912417767853191411964865383988989611452288776982343996113214944462969295
7749547939932999936999429979727961593311762124797241581688731949186682939476917299694545222196819348
1569668325497998539641217919697391265847199126799274979992177877339999721187338499385894391688757142
4377839628315395229914399726112147897399599948122361917993319944114926999815642921981378665997811872
9967919912939795941911874237196684126623211793151918221173577223365897891296638491193191626818926319
6127813499273598122265983738469915367119615465748387155399948195258986878198325321289565931794369882
3692358924999677389297641337293459814384114353897968978424818882635937221462858992492131591882224132
1117153982194132689989432355215193973386193185519916139659867292519312272981167852196787981294159611
2913296211744741423151491188919997626898296293139158939389496861563476184972948824111324969285978154
1128929154921239399482171919616671311149987887281336195251291973881413496248383216161516996491666581
6231424962123952786834891961579891914968821849776946573698886133237873812968796971699337136691824314
5768145442163769781144449818193919983511191477119947369512899413814156936149842825958595364526718158
8319371581711189818471818895122114868875787691911889164956117362787871116899195295199538719355396986
9211851663274989616961671498242498986691547331875596867296989919173763994774977221229869868132965914
5732195914183159346434492634332849997214425121875559893991761889284193689378889285997478557427216191
4919594673997161317368638349972858474699479813292211191216314518583592781129989799717793478599178914
1212816992918491286133111869816588759854919992955644799971992763518799489378127378198842317125143175
9817119772978993827939981311825351117249291295672398359748996481799455529661331151988374128717911198
6959979697456791979798577971695957796829731637773612123812799821266989181491797352197987941284655891
1829894844699799799164192911889898589226224122828488548798956836828955569942827199983734198167711532
5916952789378491793328318724924815938918116221429399311731729455882819747879189851265198441116437193
2316593981955647388164661498291113142494888583381924456899524788279716191973597227394711639844831189
3881981741112295799319415597319199117187845593977913194841473581279361128428681978861181928158967816
3939242263819932783519851991511688491453123846164148517221781892992125524717372977117928596861679911
4641477457412251293698829869979122228625995879148499396737898889638982142482362649629364938991956974
3417666478142114314819128729451691124979739715435211656911679678126199443145439652619914181916916386
9197964843859986424199652481919639895555559646793968117224461359121927495439994851589194986745767199
1191146713643837513938479919124381959615799437231597888611882549928192193269491499894796168339169992
6979872799843753778983789714199378797788991933161979219897497929969121145325613894815531148198861891
2897711394223385969627249728919332712941132392931181791715591273435311267141292629528963749919974818
2125918421718973999673882616938889788112781219151398836281824826992487716291785514764768419996341848
8117112532342797719737195144272912273419948528898235213984262216911914853922412891737981226189198334
8882822942993968884139633296571516319764762815264113984968674415659712333797681255649671289971237799
6725141179673886293898974248697199412641236288717399983269493559587293483647122119669723819651859959
1635981511964285563772993596794551919558191915999181325192193378685931492329192296325893816297868828
2991842229168849265454541381722475797132627864721153611229176825219361112214114198745615199522814789
9662196198292971249673769196931861972531994792913285496999695698693139738979739822998883371946778731
1181918926984114515911966772399278413751112259425996784855812239818799793738956869624761863966171537
8999378549159336384488325775668744969198921949111299734515923966297588431419993827392872615499467238
8219274184271732972386957524972971338913988119687169636991229178984184952396926742299916161189181478
7841981498859866989959419399266132122945925192193395264118954251326349873819169726719525916228413529
1189765873965613399337499824992558892383441129519167958433888816632944688989791799265757192441191821
1122474698626225978191978983332813388675458997571911911591189133134719817996136961827365281919585249
9519433249611991278178319662998171623744296811698481199481493878654989641277211912555645876224759575
6125712149818157123747721394932661689175392123561445398732981771894674399674385915323594549791118229
9475311931154529515111211948114624455572817339939811952455255144919686927246823239177969193595165495
6922293775128388772696845128455845794498599788218748614476199937135329672919912919134897925229848914
2891219869495424258111637249312515345839111989928477967764594159826818397866381991698227675347949931
9197372475857939168321499153862716767719999947324714971881142347989981393496624535728827564155699898
8294523819699999172283151339392979985525768564995228999556114292196329719229999257932271983447882795
1939243157255769865891729948999177881918547399793134894519417939828591196633959298444827973314731911
2987118759793419159816857586286875932941481119368122639419833371776521998373714251159949852912988542
2899137888528523774811712997118913916121861528375892921143642282799875121339226945497819958922912934
6821975883666159111294417189613823241844761788648899421981336795385271598994988991711356515994498997
1145919998791266421889855551242212544911939312439931545382428359422871391568759927877629148945198935
7928248141712639396631551112398785717846351616999228378691195976769815744656987513118218637488928521
1684838399588648881327586957199874792142167832618795919593955245946215969749317899549939164939781974
8283891211961198885189675761681423122591798322135234799979215759171724989419131318722297222491939131`;

console.log(solve(arr1)); // 2879

