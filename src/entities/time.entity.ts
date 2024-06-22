import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

export class Times{
    @CreateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: Date;

    @UpdateDateColumn({type: "timestamp", default: () => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"},)
    updated_at: Date;

    @DeleteDateColumn({type: "timestamp", default: null, nullable: true})
    deleted_at: Date;
    
} 