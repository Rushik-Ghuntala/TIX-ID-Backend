
// import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// export class MigrationTable1710744208927 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {

        
//         // Create times table
//         await queryRunner.createTable(new Table({
//             name: 'times',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'created_at',
//                     type: 'timestamp',
//                     default: 'CURRENT_TIMESTAMP',
//                 },
//                 {
//                     name: 'updated_at',
//                     type: 'timestamp',
//                     default: 'CURRENT_TIMESTAMP',
//                     onUpdate: 'CURRENT_TIMESTAMP',
//                 },
//                 {
//                     name: 'deleted_at',
//                     type: 'timestamp',
//                     isNullable: true,
//                 },
//             ],
//         }));

//         // Create User table
//         await queryRunner.createTable(new Table({
//             name: 'user',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'name',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'email',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'password',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'token',
//                     type: 'varchar',
//                     isNullable: true,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//         }));

//         // // Create Movie Show table
//         // await queryRunner.createTable(new Table({
//         //     name: 'movie_show',
//         //     columns: [
//         //         {
//         //             name: 'id',
//         //             type: 'int',
//         //             isPrimary: true,
//         //             isGenerated: true,
//         //             generationStrategy: 'increment',
//         //         },
//         //         { 
//         //             name: "created_at",
//         //             type: "timestamp", 
//         //             default: "CURRENT_TIMESTAMP" 
//         //         },
//         //         { 
//         //             name: "updated_at", 
//         //             type: "timestamp", 
//         //             default: "CURRENT_TIMESTAMP", 
//         //             onUpdate: "CURRENT_TIMESTAMP" 
//         //         },
//         //         { 
//         //             name: "deleted_at", 
//         //             type: "timestamp", 
//         //             default: null, 
//         //             isNullable: true 
//         //         },
//         //         {
//         //             name: 'movieId',
//         //             type: 'int',
//         //             isNullable: false,
//         //         },
//         //         {
//         //             name: 'showtimeId',
//         //             type: 'int',
//         //             isNullable: false,
//         //         },
//         //     ],
//         //     foreignKeys: [
//         //         {
//         //             columnNames: ['movieId'],
//         //             referencedColumnNames: ['id'],
//         //             referencedTableName: 'movie',
//         //             onDelete: 'CASCADE',
//         //         },
//         //         {
//         //             columnNames: ['showtimeId'],
//         //             referencedColumnNames: ['id'],
//         //             referencedTableName: 'showtime',
//         //             onDelete: 'CASCADE',
//         //         }
//         //     ]
//         // }));

//         // Create Movie table
// await queryRunner.createTable(new Table({
//     name: 'movie',
//     columns: [
//         {
//             name: 'id',
//             type: 'int',
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: 'increment',
//         },
//         {
//             name: 'title',
//             type: 'varchar',
//             isNullable: false,
//         },
//         {
//             name: 'image',
//             type: 'varchar',
//             isNullable: false,
//         },
//         {
//             name: 'genre',
//             type: 'varchar',
//             isNullable: false,
//         },
//         {
//             name: 'duration',
//             type: 'varchar',
//             isNullable: false,
//         },
//         {
//             name: 'director',
//             type: 'varchar',
//             isNullable: false,
//         },
//         {
//             name: 'rated',
//             type: 'varchar',
//             isNullable: false,
//         },
//         {
//             name: "created_at",
//             type: "timestamp",
//             default: "CURRENT_TIMESTAMP"
//         },
//         {
//             name: "updated_at",
//             type: "timestamp",
//             default: "CURRENT_TIMESTAMP",
//             onUpdate: "CURRENT_TIMESTAMP"
//         },
//         {
//             name: "deleted_at",
//             type: "timestamp",
//             default: null,
//             isNullable: true
//         },
//     ],
// }));


//         // Create Theater table
//         await queryRunner.createTable(new Table({
//             name: 'theater',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'name',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'address',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'city',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'badge',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//         }));

//         // Create Screen table
//         await queryRunner.createTable(new Table({
//             name: 'screen',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'dimension',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'theaterId',
//                     type: 'int',
//                     isNullable: true,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//             foreignKeys: [
//                 {
//                     columnNames: ['theaterId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'theater',
//                     onDelete: 'SET NULL',
//                     onUpdate: 'CASCADE',
//                 },
//             ],
//         }));

//         // // Create Showtime table
//         // await queryRunner.createTable(new Table({
//         //     name: 'showtime',
//         //     columns: [
//         //         {
//         //             name: 'id',
//         //             type: 'int',
//         //             isPrimary: true,
//         //             isGenerated: true,
//         //             generationStrategy: 'increment',
//         //         },
//         //         {
//         //             name: 'movieId',
//         //             type: 'int',
//         //             isNullable: false,
//         //         },
//         //         {
//         //             name: 'screenId',
//         //             type: 'int',
//         //             isNullable: false,
//         //         },
//         //         {
//         //             name: 'time',
//         //             type: 'timestamp',
//         //             isNullable: false,
//         //         },
//         //         {
//         //             name: 'price',
//         //             type: 'int',
//         //             isNullable: false,
//         //         },
//         //         { 
//         //             name: "created_at",
//         //             type: "timestamp", 
//         //             default: "CURRENT_TIMESTAMP" 
//         //         },
//         //         { 
//         //             name: "updated_at", 
//         //             type: "timestamp", 
//         //             default: "CURRENT_TIMESTAMP", 
//         //             onUpdate: "CURRENT_TIMESTAMP" 
//         //         },
//         //         { 
//         //             name: "deleted_at", 
//         //             type: "timestamp", 
//         //             default: null, 
//         //             isNullable: true 
//         //         },
//         //     ],
//         //     foreignKeys: [
//         //         {
//         //             columnNames: ['movieId'],
//         //             referencedColumnNames: ['id'],
//         //             referencedTableName: 'movie',
//         //             onDelete: 'CASCADE',
//         //             onUpdate: 'CASCADE',
//         //         },
//         //         {
//         //             columnNames: ['screenId'],
//         //             referencedColumnNames: ['id'],
//         //             referencedTableName: 'screen',
//         //             onDelete: 'CASCADE',
//         //             onUpdate: 'CASCADE',
//         //         },
//         //         {
//         //             columnNames: ['movieShows'],
//         //             referencedColumnNames: ['id'],
//         //             referencedTableName: 'movie_show',
//         //             onDelete: 'CASCADE',
//         //             onUpdate: 'CASCADE',
//         //         }
//         //     ],
//         // }));

//         // Create MovieShow table
// // Create Showtime table
// await queryRunner.createTable(new Table({
//     name: 'showtime',
//     columns: [
//         {
//             name: 'id',
//             type: 'int',
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: 'increment',
//         },
//         {
//             name: 'movieId',
//             type: 'int',
//             isNullable: false,
//         },
//         {
//             name: 'screenId',
//             type: 'int',
//             isNullable: false,
//         },
//         {
//             name: 'time',
//             type: 'timestamp',
//             isNullable: false,
//         },
//         {
//             name: 'price',
//             type: 'decimal',
//             isNullable: false,
//         },
//         {
//             name: "created_at",
//             type: "timestamp",
//             default: "CURRENT_TIMESTAMP"
//         },
//         {
//             name: "updated_at",
//             type: "timestamp",
//             default: "CURRENT_TIMESTAMP",
//             onUpdate: "CURRENT_TIMESTAMP"
//         },
//         {
//             name: "deleted_at",
//             type: "timestamp",
//             default: null,
//             isNullable: true
//         },
//     ],
//     foreignKeys: [
//         {
//             columnNames: ['movieId'],
//             referencedColumnNames: ['id'],
//             referencedTableName: 'movie',
//             onDelete: 'CASCADE',
//         },
//         {
//                     columnNames: ['screenId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'screen',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//     ]
// }));


// // Create MovieShow table
// await queryRunner.createTable(new Table({
//     name: 'movie_show',
//     columns: [
//         {
//             name: 'id',
//             type: 'int',
//             isPrimary: true,
//             isGenerated: true,
//             generationStrategy: 'increment',
//         },
//         {
//             name: 'movieId',
//             type: 'int',
//             isNullable: false,
//         },
//         {
//             name: 'showtimeId',
//             type: 'int',
//             isNullable: false,
//         },
//         {
//             name: "created_at",
//             type: "timestamp",
//             default: "CURRENT_TIMESTAMP"
//         },
//         {
//             name: "updated_at",
//             type: "timestamp",
//             default: "CURRENT_TIMESTAMP",
//             onUpdate: "CURRENT_TIMESTAMP"
//         },
//         {
//             name: "deleted_at",
//             type: "timestamp",
//             default: null,
//             isNullable: true
//         },
//     ],
//     foreignKeys: [
//         {
//             columnNames: ['movieId'],
//     referencedColumnNames: ['id'],
//     referencedTableName: 'movie',
//     onDelete: 'CASCADE',
//         },
//         {
//             columnNames: ['showtimeId'],
//     referencedColumnNames: ['id'],
//     referencedTableName: 'showtime',
//     onDelete: 'CASCADE',
//         },
//     ]
// }));

//         // Creates Seats table
//         await queryRunner.createTable(new Table({
//             name: 'seats',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'screenId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'row_number',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'seat_number',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'seatLabel',
//                     type: 'varchar',
//                 },
//                 {
//                     name: 'is_booked',
//                     type: 'boolean',
//                     default: false,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//             foreignKeys: [
//                 {
//                     columnNames: ['screenId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'screen',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//             ],
//         }));

//         // Create Payment table
//         await queryRunner.createTable(new Table({
//             name: 'payment',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'userId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'amount',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'payment_date',
//                     type: 'timestamp',
//                     isNullable: false,
//                     default: 'CURRENT_TIMESTAMP',
//                 },
//                 {
//                     name: 'status',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//             foreignKeys: [
//                 {
//                     columnNames: ['userId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'user',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//             ],
//         }));

//         // Create Voucher table
//         await queryRunner.createTable(new Table({
//             name: 'voucher',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'code',
//                     type: 'varchar',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'discount_amount',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'expiration_date',
//                     type: 'timestamp',
//                     isNullable: false,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//         }));

//         // Create Booking table
//         await queryRunner.createTable(new Table({
//             name: 'booking',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'userId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'showtimeId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'movieId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'total_seat',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'total_price',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'discount',
//                     type: 'int',
//                     isNullable: true,
//                 },
//                 {
//                     name: 'final_amount',
//                     type: 'int',
//                     isNullable: true,
//                 },
//                 {
//                     name: 'booking_date',
//                     type: 'timestamp',
//                     isNullable: false,
//                     default: 'CURRENT_TIMESTAMP',
//                 },
//                 {
//                     name: 'paymentId',
//                     type: 'int',
//                     isNullable: true,
//                 },
//                 {
//                     name: 'voucherId',
//                     type: 'int',
//                     isNullable: true,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//             foreignKeys: [
//                 {
//                     columnNames: ['userId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'user',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//                 {
//                     columnNames: ['showtimeId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'showtime',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//                 {
//                     columnNames: ['movieId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'movie',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//                 {
//                     columnNames: ['paymentId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'payment',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//                 {
//                     columnNames: ['voucherId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'voucher',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//             ],
//         }));

//         // Create Seat table
//         await queryRunner.createTable(new Table({
//             name: 'seat',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'screenId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'row_number',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'seat_number',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'is_booked',
//                     type: 'boolean',
//                     default: false,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//             foreignKeys: [
//                 {
//                     columnNames: ['screenId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'screen',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//             ],
//         }));

//         // Create Ticket table
//         await queryRunner.createTable(new Table({
//             name: 'ticket',
//             columns: [
//                 {
//                     name: 'id',
//                     type: 'int',
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment',
//                 },
//                 {
//                     name: 'userId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 {
//                     name: 'bookingId',
//                     type: 'int',
//                     isNullable: false,
//                 },
//                 { 
//                     name: "created_at",
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "updated_at", 
//                     type: "timestamp", 
//                     default: "CURRENT_TIMESTAMP", 
//                     onUpdate: "CURRENT_TIMESTAMP" 
//                 },
//                 { 
//                     name: "deleted_at", 
//                     type: "timestamp", 
//                     default: null, 
//                     isNullable: true 
//                 },
//             ],
//             foreignKeys: [
//                 {
//                     columnNames: ['userId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'user',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//                 {
//                     columnNames: ['bookingId'],
//                     referencedColumnNames: ['id'],
//                     referencedTableName: 'booking',
//                     onDelete: 'CASCADE',
//                     onUpdate: 'CASCADE',
//                 },
//             ],
//         }));

//         // Create Order table
//         await queryRunner.createTable(new Table({
//             name: 'order',
//             columns: [
//                 {
//                 name: 'id',
//                 type: 'int',
//                 isPrimary: true,
//                 isGenerated: true,
//                 generationStrategy: 'increment',
//                 },
//                 {
//                 name: 'total_seat',
//                 type: 'int',
//                 isNullable: false,
//                 },
//                 {
//                 name: 'total_price',
//                 type: 'int',
//                 isNullable: false,
//                 },
//                 {
//                 name: 'discount',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'final_amount',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'userId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'movieId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'theaterId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'screenId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'showtimeId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'paymentId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//                 {
//                 name: 'voucherId',
//                 type: 'int',
//                 isNullable: true,
//                 },
//             ],
//         }));
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable('order');
//         await queryRunner.dropTable('ticket');
//         // await queryRunner.dropTable('seat_booking'); 
//         await queryRunner.dropTable('seat'); 
//         await queryRunner.dropTable('booking');
//         await queryRunner.dropTable('voucher');
//         await queryRunner.dropTable('payment');
//         await queryRunner.dropTable('seats');
//         await queryRunner.dropTable('movie_show');
//         await queryRunner.dropTable('showtime');
//         await queryRunner.dropTable('screen');
//         await queryRunner.dropTable('theater');
//         await queryRunner.dropTable('movie');
//         await queryRunner.dropTable('user');
//         await queryRunner.dropTable('times');
//     } 
// }

