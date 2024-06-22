

import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class MigrationTable1710994144396 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create Time table
        await queryRunner.createTable(new Table({
            name: 'time',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
        }));
        
        // Create OTP table
        await queryRunner.createTable(new Table({
            name: "otp",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "email",
                    type: "varchar"
                },
                {
                    name: "otp",
                    type: "int"
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ]
        }), true);

        // Create Profile table
        await queryRunner.createTable(new Table({
            name: "profile",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment"
                },
                {
                    name: "gender",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: "dateOfBirth",
                    type: "varchar",
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ]
        }), true);

        // Create User table
        await queryRunner.createTable(new Table({
            name: 'user',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'firstName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: "contactNumber",
                    type: "varchar",
                    isNullable: false,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'token',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: "role",
                    type: "enum",
                    enum: ["user", "admin"],
                    default: "'user'"
                },
                {
                    name: "image",
                    type: "varchar"
                },
                {
                    name: "resetPasswordExpires",
                    type: "timestamp",
                    isNullable: true
                },
                {
                    name: "profileId",
                    type: "int",
                    isNullable: true
                },
                { 
                    name: "created_at",
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "updated_at", 
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP", 
                    onUpdate: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "deleted_at", 
                    type: "timestamp", 
                    default: null, 
                    isNullable: true 
                },
            ],
            foreignKeys: [
                {
                    columnNames: ["profileId"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "profile",
                    onDelete: "CASCADE"
                }
            ]
        }));

        

        // Create Movie table
        await queryRunner.createTable(new Table({
            name: 'movie',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'image',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'genre',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'duration',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'director',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'rated',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
        }));

        // Create Theater table
        await queryRunner.createTable(new Table({
            name: 'theater',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'address',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'city',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'badge',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
        }));

        // Create Screen table
        await queryRunner.createTable(new Table({
            name: 'screen',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'dimension',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'theaterId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['theaterId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'theater',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }));

        // Create Showtime table
        await queryRunner.createTable(new Table({
            name: 'showtime',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'movieId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'screenId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'date',
                    type: 'date',
                    isNullable: false,
                },
                {
                    name: 'time',
                    type: 'time',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'decimal',
                    isNullable: false,
                },
                {
                    name: 'isHousefull',
                    type: 'boolean',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['movieId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'movie',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['screenId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'screen',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }));

        // Create Seats table
        await queryRunner.createTable(new Table({
            name: 'seats',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'screenId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'row_number',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'seat_number',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'is_booked',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
        }));

        // Create SeatLabel table
        await queryRunner.createTable(new Table({
            name: 'seats_label',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'seatsId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'screenId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'showtimeId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'row_number',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'seat_number',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'seatLabel',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'is_booked',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['seatsId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'seats',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE', 
                },
                {
                    columnNames: ['showtimeId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'showtime',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE', 
                }
            ]
        }));


        

        //Create Voucher code
        await queryRunner.createTable(new Table({
            name: 'voucher',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'code',
                    type: 'varchar',
                },
                {
                    name: 'discount_amount',
                    type: 'decimal', // Adjust data type according to your requirements
                    precision: 10, // Adjust precision and scale according to your requirements
                    scale: 2,
                },
                {
                    name: 'expiration_date',
                    type: 'timestamp', // Adjust data type according to your requirements
                },
                { 
                    name: "created_at",
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "updated_at", 
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP", 
                    onUpdate: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "deleted_at", 
                    type: "timestamp", 
                    default: null, 
                    isNullable: true 
                },
            ],
        }));

        // // Create Booking table
        // await queryRunner.createTable(new Table({
        //     name: 'booking',
        //     columns: [
        //         {
        //             name: 'id',
        //             type: 'int',
        //             isPrimary: true,
        //             isGenerated: true,
        //             generationStrategy: 'increment',
        //         },
        //         {
        //             name: 'userId',
        //             type: 'int',
        //             isNullable: false,
        //         },
        //         {
        //             name: 'showtimeId',
        //             type: 'int',
        //             isNullable: false,
        //         },
        //         {
        //             name: 'total_seat',
        //             type: 'int',
        //             isNullable: false,
        //         },
        //         {
        //             name: 'total_price',
        //             type: 'decimal',
        //             isNullable: false,
        //         },
        //         {
        //             name: 'discount',
        //             type: 'decimal',
        //             isNullable: true,
        //         },
        //         {
        //             name: 'final_amount',
        //             type: 'decimal',
        //             isNullable: true,
        //         },
        //         {
        //             name: 'booking_date',
        //             type: 'timestamp',
        //             isNullable: false,
        //             default: 'CURRENT_TIMESTAMP',
        //         },
        //         {
        //             name: 'paymentId',
        //             type: 'int',
        //             isNullable: true,
        //         },
        //         {
        //             name: 'voucherId',
        //             type: 'int',
        //             isNullable: true,
        //         },
        //         {
        //             name: 'created_at',
        //             type: 'timestamp',
        //             default: 'CURRENT_TIMESTAMP',
        //         },
        //         {
        //             name: 'updated_at',
        //             type: 'timestamp',
        //             default: 'CURRENT_TIMESTAMP',
        //             onUpdate: 'CURRENT_TIMESTAMP',
        //         },
        //         {
        //             name: 'deleted_at',
        //             type: 'timestamp',
        //             default: null,
        //                                 isNullable: true,
        //         },
        //     ],
        //     foreignKeys: [
        //         {
        //             columnNames: ['userId'],
        //             referencedColumnNames: ['id'],
        //             referencedTableName: 'user',
        //             onDelete: 'CASCADE',
        //             onUpdate: 'CASCADE',
        //         },
        //         {
        //             columnNames: ['showtimeId'],
        //             referencedColumnNames: ['id'],
        //             referencedTableName: 'showtime',
        //             onDelete: 'CASCADE',
        //             onUpdate: 'CASCADE',
        //         },
        //         {
        //             columnNames: ['paymentId'],
        //             referencedColumnNames: ['id'],
        //             referencedTableName: 'payment',
        //             onDelete: 'SET NULL',
        //             onUpdate: 'CASCADE',
        //         },
        //         {
        //             columnNames: ['voucherId'],
        //             referencedColumnNames: ['id'],
        //             referencedTableName: 'voucher',
        //             onDelete: 'SET NULL',
        //             onUpdate: 'CASCADE',
        //         },
        //     ],
        // }));

        // Create MovieShow table
        await queryRunner.createTable(new Table({
            name: 'movie_show',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'userId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'movieId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'showtimeId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'screenId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'seatsId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'seatLabels',
                    type: 'varchar', // Use text type to store string array
                    // isArray: true, // Define as array
                    isNullable: false,
                },
                // {
                //     name: 'seatLabels',
                //     type: 'text', // Use text type to store string array
                //     isArray: true, // Define as array
                //     isNullable: false,
                // },
                {
                    name: 'totalSeats',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'totalPrice',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'voucherId',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'voucherCode',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'voucherDiscount',
                    type: 'int',
                    default: '0',
                },
                {
                    name: 'finalAmount',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'is_payment_done',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'deleted_at',
                    type: 'timestamp',
                    default: null,
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['movieId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'movie',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['showtimeId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'showtime',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['screenId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'screen',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['seatsId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'seats',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['voucherId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'voucher',
                    onDelete: 'SET NULL'
                },
                {
                    columnNames: ['userId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }));

        // Create Payment table
        await queryRunner.createTable(new Table({
            name: 'payment',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'userId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'amount',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'status',
                    type: 'boolean',
                    default: false,
                },
                {
                    name: "movieShowId",
                    type: "int",
                    isNullable: false,
                },
                { 
                    name: "created_at",
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "updated_at", 
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP", 
                    onUpdate: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "deleted_at", 
                    type: "timestamp", 
                    default: null, 
                    isNullable: true 
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['userId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ["movieShowId"],
                    referencedColumnNames: ["id"],
                    referencedTableName: "movie_show",
                    onDelete: "CASCADE",
                    onUpdate: 'CASCADE',
                },
            ],
        }));

        // Create Ticket table
        await queryRunner.createTable(new Table({
            name: 'ticket',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'userId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'movieShowId',
                    type: 'int',
                    isNullable: false,
                },
                {
                    name: 'movieImage',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'movieName',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'time',
                    type: 'timestamp',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'theaterName',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'screenDimension',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                { 
                    name: "created_at",
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "updated_at", 
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP", 
                    onUpdate: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "deleted_at", 
                    type: "timestamp", 
                    default: null, 
                    isNullable: true 
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['userId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'user',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
                {
                    columnNames: ['movieShowId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'movie_show',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ]
        }));

        // Create Detailed Ticket table
        await queryRunner.createTable(new Table({
            name: 'detailed_ticket',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'ticketId',
                    type: 'int',
                    isNullable: true,
                },
                { 
                    name: "created_at",
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "updated_at", 
                    type: "timestamp", 
                    default: "CURRENT_TIMESTAMP", 
                    onUpdate: "CURRENT_TIMESTAMP" 
                },
                { 
                    name: "deleted_at", 
                    type: "timestamp", 
                    default: null, 
                    isNullable: true 
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['ticketId'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'ticket',
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE'
                },
            ]
        }), true);
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop tables in reverse order to avoid constraint violations
        await queryRunner.dropTable('detailed_ticket');
        await queryRunner.dropTable('ticket');
        await queryRunner.dropTable('payment');
        await queryRunner.dropTable('movie_show');
        // await queryRunner.dropTable('booking');
        
        await queryRunner.dropTable('voucher');
        await queryRunner.dropTable('seats_label');
        await queryRunner.dropTable('seats');
        
        await queryRunner.dropTable('showtime');
        await queryRunner.dropTable('screen');
        await queryRunner.dropTable('theater');
        await queryRunner.dropTable('movie');
        await queryRunner.dropTable('user');
        await queryRunner.dropTable('profile');
        await queryRunner.dropTable('otp');
        await queryRunner.dropTable('time');
    }

}


