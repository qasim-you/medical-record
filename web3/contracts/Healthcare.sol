// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Healthcare {
    address public admin;
    
    // System variables
    uint256 public doctorCount;
    uint256 public patientCount;
    uint256 public medicineCount;
    uint256 public appointmentCount;
    uint256 public platformRevenue;

    // Structs
    struct Doctor {
        address wallet;
        string name;
        string specialization;
        string experience;
        uint256 consultationFee;
        string availableHours;
        string profileImageURI;
        string certificateURI;
        bool isVerified;
        bool isRegistered;
    }

    struct Patient {
        address wallet;
        string name;
        uint256 age;
        string bloodGroup;
        string allergies;
        string currentMedications;
        string profileImageURI;
        address generalConsultant;
        bool isRegistered;
    }

    struct Medicine {
        uint256 id;
        string name;
        string manufacturer;
        string category;
        string dosage;
        uint256 price;
        uint256 stockQuantity;
        uint256 discount; // in percentage (0-100)
        string sideEffects;
        string imageURI;
        bool isActive;
    }

    struct Appointment {
        uint256 id;
        address patient;
        address doctor;
        string time;
        string note;
        bool isCompleted;
    }

    struct MedicalRecord {
        uint256 id;
        address patient;
        address doctor;
        string diagnosis;
        string medicalHistory;
        uint256 timestamp;
    }

    struct Prescription {
        uint256 id;
        address patient;
        address doctor;
        uint256 medicineId;
        string dosageInstruction;
        uint256 quantity;
        uint256 timestamp;
    }

    struct Message {
        address sender;
        address receiver;
        string content;
        uint256 timestamp;
    }

    // Mappings
    mapping(address => Doctor) public doctors;
    address[] public doctorAddresses;

    mapping(address => Patient) public patients;
    address[] public patientAddresses;

    mapping(uint256 => Medicine) public medicines;
    
    mapping(uint256 => Appointment) public appointments;
    mapping(address => uint256[]) public doctorAppointments;
    mapping(address => uint256[]) public patientAppointments;

    mapping(address => MedicalRecord[]) public patientRecords;
    mapping(address => Prescription[]) public patientPrescriptions;

    // Chat mapping: keccak256(abi.encodePacked(addr1, addr2)) => Message[]
    mapping(bytes32 => Message[]) private chats;

    // Events
    event DoctorRegistered(address indexed doctor);
    event DoctorVerified(address indexed admin, address indexed doctor, bool status);
    event MedicineAdded(uint256 indexed medicineId);
    event AppointmentBooked(uint256 indexed appointmentId, address indexed patient, address indexed doctor);
    event AppointmentCompleted(uint256 indexed appointmentId);
    event MedicalRecordUpdated(address indexed patient, address indexed doctor);
    event MedicinePrescribed(address indexed patient, address indexed doctor, uint256 medicineId);
    event PatientRegistered(address indexed patient);
    event MedicinePurchased(address indexed patient, uint256 indexed medicineId, uint256 quantity);
    event MessageSent(address indexed sender, address indexed receiver);

    // Modifiers
    modifier onlyAdmin() {
        require(msg.sender == admin, "Not Admin");
        _;
    }

    modifier onlyVerifiedDoctor() {
        require(doctors[msg.sender].isVerified, "Not a verified doctor");
        _;
    }

    modifier onlyRegisteredPatient() {
        require(patients[msg.sender].isRegistered, "Not a registered patient");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    // --- Admin Functions ---

    function verifyDoctor(address _doctorAddress, bool _status) external onlyAdmin {
        require(doctors[_doctorAddress].isRegistered, "Doctor not registered");
        doctors[_doctorAddress].isVerified = _status;
        emit DoctorVerified(msg.sender, _doctorAddress, _status);
    }

    function addMedicine(
        string memory _name, string memory _manufacturer, string memory _category,
        string memory _dosage, uint256 _price, uint256 _stockQuantity,
        uint256 _discount, string memory _sideEffects, string memory _imageURI
    ) external onlyAdmin {
        medicineCount++;
        medicines[medicineCount] = Medicine(
            medicineCount, _name, _manufacturer, _category, _dosage,
            _price, _stockQuantity, _discount, _sideEffects, _imageURI, true
        );
        emit MedicineAdded(medicineCount);
    }

    function getPlatformStats() external view onlyAdmin returns (
        uint256 _doctors, uint256 _patients, uint256 _medicines,
        uint256 _appointments, uint256 _revenue
    ) {
        return (doctorCount, patientCount, medicineCount, appointmentCount, platformRevenue);
    }

    // --- Doctor Functions ---

    function registerDoctor(
        string memory _name, string memory _specialization, string memory _experience,
        uint256 _consultationFee, string memory _availableHours, string memory _profileImageURI,
        string memory _certificateURI
    ) external payable {
        require(!doctors[msg.sender].isRegistered, "Already registered");
        require(msg.value > 0, "Registration fee required");

        platformRevenue += msg.value; // Store the registration fee

        doctors[msg.sender] = Doctor(
            msg.sender, _name, _specialization, _experience, _consultationFee,
            _availableHours, _profileImageURI, _certificateURI, false, true
        );
        doctorAddresses.push(msg.sender);
        doctorCount++;

        emit DoctorRegistered(msg.sender);
    }

    function completeAppointment(uint256 _appointmentId) external onlyVerifiedDoctor {
        require(appointments[_appointmentId].doctor == msg.sender, "Not your appointment");
        appointments[_appointmentId].isCompleted = true;
        emit AppointmentCompleted(_appointmentId);
    }

    function updateMedicalRecord(address _patient, string memory _diagnosis, string memory _history) external onlyVerifiedDoctor {
        require(patients[_patient].isRegistered, "Patient not registered");
        patientRecords[_patient].push(MedicalRecord(
            patientRecords[_patient].length + 1,
            _patient,
            msg.sender,
            _diagnosis,
            _history,
            block.timestamp
        ));
        emit MedicalRecordUpdated(_patient, msg.sender);
    }

    function prescribeMedicine(address _patient, uint256 _medicineId, string memory _dosageInstruction, uint256 _quantity) external onlyVerifiedDoctor {
        require(patients[_patient].isRegistered, "Patient not registered");
        require(medicines[_medicineId].isActive, "Medicine not available");

        patientPrescriptions[_patient].push(Prescription(
            patientPrescriptions[_patient].length + 1,
            _patient,
            msg.sender,
            _medicineId,
            _dosageInstruction,
            _quantity,
            block.timestamp
        ));
        emit MedicinePrescribed(_patient, msg.sender, _medicineId);
    }

    // --- Patient Functions ---

    function registerPatient(
        string memory _name, uint256 _age, string memory _bloodGroup,
        string memory _allergies, string memory _currentMedications,
        string memory _profileImageURI, address _generalConsultant
    ) external {
        require(!patients[msg.sender].isRegistered, "Already registered");
        require(doctors[_generalConsultant].isVerified, "Invalid consultant");

        patients[msg.sender] = Patient(
            msg.sender, _name, _age, _bloodGroup, _allergies,
            _currentMedications, _profileImageURI, _generalConsultant, true
        );
        patientAddresses.push(msg.sender);
        patientCount++;

        emit PatientRegistered(msg.sender);
    }

    function bookAppointment(address _doctor, string memory _time, string memory _note) external payable onlyRegisteredPatient {
        require(doctors[_doctor].isVerified, "Doctor not verified");
        Doctor memory doc = doctors[_doctor];
        
        uint256 fee = doc.consultationFee;
        require(msg.value >= fee, "Insufficient consultation fee");

        // Take platform commission (10%)
        uint256 platformCut = (fee * 10) / 100;
        uint256 doctorCut = fee - platformCut;
        
        platformRevenue += platformCut;

        // Transfer funds directly to doctor
        payable(_doctor).transfer(doctorCut);
        // Refund excess
        if (msg.value > fee) {
            payable(msg.sender).transfer(msg.value - fee);
        }

        appointmentCount++;
        appointments[appointmentCount] = Appointment(
            appointmentCount,
            msg.sender,
            _doctor,
            _time,
            _note,
            false
        );

        doctorAppointments[_doctor].push(appointmentCount);
        patientAppointments[msg.sender].push(appointmentCount);

        emit AppointmentBooked(appointmentCount, msg.sender, _doctor);
    }

    function buyMedicine(uint256 _medicineId, uint256 _quantity) external payable onlyRegisteredPatient {
        require(medicines[_medicineId].isActive, "Medicine not active");
        Medicine storage med = medicines[_medicineId];
        require(med.stockQuantity >= _quantity, "Not enough stock");

        uint256 cost = med.price * _quantity;
        uint256 discountAmount = (cost * med.discount) / 100;
        uint256 finalPrice = cost - discountAmount;

        require(msg.value >= finalPrice, "Insufficient funds provided");

        platformRevenue += finalPrice;
        med.stockQuantity -= _quantity;

        if (msg.value > finalPrice) {
            payable(msg.sender).transfer(msg.value - finalPrice);
        }

        emit MedicinePurchased(msg.sender, _medicineId, _quantity);
    }

    // --- Chat Room Details ---
    function getChatRoomId(address user1, address user2) internal pure returns (bytes32) {
        if (user1 < user2) {
            return keccak256(abi.encodePacked(user1, user2));
        } else {
            return keccak256(abi.encodePacked(user2, user1));
        }
    }

    function sendMessage(address _receiver, string memory _content) external {
        require(
            (doctors[msg.sender].isVerified && patients[_receiver].isRegistered) || 
            (patients[msg.sender].isRegistered && doctors[_receiver].isVerified), 
            "Unauthorized chat combination"
        );

        bytes32 roomId = getChatRoomId(msg.sender, _receiver);
        chats[roomId].push(Message(
            msg.sender,
            _receiver,
            _content,
            block.timestamp
        ));

        emit MessageSent(msg.sender, _receiver);
    }

    function getMessages(address _otherUser) external view returns (Message[] memory) {
        bytes32 roomId = getChatRoomId(msg.sender, _otherUser);
        return chats[roomId];
    }

    // --- Getter Functions ---

    function getAllDoctors() external view returns (Doctor[] memory) {
        Doctor[] memory allDocs = new Doctor[](doctorCount);
        for(uint i = 0; i < doctorCount; i++) {
            allDocs[i] = doctors[doctorAddresses[i]];
        }
        return allDocs;
    }
    
    function getAllMedicines() external view returns (Medicine[] memory) {
        Medicine[] memory allMeds = new Medicine[](medicineCount);
        for(uint i = 1; i <= medicineCount; i++) {
            allMeds[i-1] = medicines[i];
        }
        return allMeds;
    }

    function getPatientMedicalHistory(address _patient) external view returns (MedicalRecord[] memory) {
        require(msg.sender == _patient || doctors[msg.sender].isVerified, "Not authorized");
        return patientRecords[_patient];
    }

    function getPatientPrescriptions(address _patient) external view returns (Prescription[] memory) {
        require(msg.sender == _patient || doctors[msg.sender].isVerified, "Not authorized");
        return patientPrescriptions[_patient];
    }

    // Admin can withdraw accumulated revenue
    function withdrawPlatformRevenue() external onlyAdmin {
        require(platformRevenue > 0, "No revenue available");
        uint256 amount = platformRevenue;
        platformRevenue = 0;
        payable(admin).transfer(amount);
    }
}
