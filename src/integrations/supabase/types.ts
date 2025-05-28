export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      agent_outputs: {
        Row: {
          compensation_analysis: string | null
          created_at: string | null
          enhanced_description: string | null
          id: number
          job_id: number | null
          job_summary: string | null
          terms: Json | null
        }
        Insert: {
          compensation_analysis?: string | null
          created_at?: string | null
          enhanced_description?: string | null
          id?: number
          job_id?: number | null
          job_summary?: string | null
          terms?: Json | null
        }
        Update: {
          compensation_analysis?: string | null
          created_at?: string | null
          enhanced_description?: string | null
          id?: number
          job_id?: number | null
          job_summary?: string | null
          terms?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_outputs_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_job"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          candidate_email: string | null
          candidate_name: string | null
          id: string
          job_id: number | null
          resume_url: string | null
          submitted_at: string | null
        }
        Insert: {
          candidate_email?: string | null
          candidate_name?: string | null
          id?: string
          job_id?: number | null
          resume_url?: string | null
          submitted_at?: string | null
        }
        Update: {
          candidate_email?: string | null
          candidate_name?: string | null
          id?: string
          job_id?: number | null
          resume_url?: string | null
          submitted_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_messages: {
        Row: {
          content: string | null
          created_at: string
          id: number
          media_url: string | null
          role: string
          session_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: number
          media_url?: string | null
          role: string
          session_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: number
          media_url?: string | null
          role?: string
          session_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: number
          status: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      clients: {
        Row: {
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          description: string | null
          id: string
          industry: string | null
          logo_url: string | null
          name: string | null
          website: string | null
        }
        Insert: {
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          logo_url?: string | null
          name?: string | null
          website?: string | null
        }
        Update: {
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          industry?: string | null
          logo_url?: string | null
          name?: string | null
          website?: string | null
        }
        Relationships: []
      }
      daily_transcriptions: {
        Row: {
          created_at: string | null
          id: number
          meeting_id: number | null
          participant_id: string
          text: string
          timestamp: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          meeting_id?: number | null
          participant_id: string
          text: string
          timestamp: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          meeting_id?: number | null
          participant_id?: string
          text?: string
          timestamp?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "daily_transcriptions_meeting_id_fkey"
            columns: ["meeting_id"]
            isOneToOne: false
            referencedRelation: "meetings"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_messages: {
        Row: {
          content: string | null
          created_at: string | null
          id: number
          role: string
          session_id: number | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          id?: number
          role: string
          session_id?: number | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          id?: number
          role?: string
          session_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "interview_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "interview_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      interview_sessions: {
        Row: {
          created_at: string | null
          ended_at: string | null
          id: number
          started_at: string | null
          status: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          id?: number
          started_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          id?: number
          started_at?: string | null
          status?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          analysis: Json | null
          application_deadline: string | null
          category: string | null
          client_id: string | null
          content: string | null
          created_at: string
          experience_level: string | null
          id: number
          is_active: boolean | null
          job_type: string | null
          location: string | null
          posted_at: string | null
          remote_allowed: boolean | null
          salary_max: number | null
          salary_min: number | null
          salary_range: string | null
          search_string: string | null
          skills_required: string[] | null
          source: string | null
          summary: string | null
          tags: string[] | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          analysis?: Json | null
          application_deadline?: string | null
          category?: string | null
          client_id?: string | null
          content?: string | null
          created_at?: string
          experience_level?: string | null
          id?: number
          is_active?: boolean | null
          job_type?: string | null
          location?: string | null
          posted_at?: string | null
          remote_allowed?: boolean | null
          salary_max?: number | null
          salary_min?: number | null
          salary_range?: string | null
          search_string?: string | null
          skills_required?: string[] | null
          source?: string | null
          summary?: string | null
          tags?: string[] | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          analysis?: Json | null
          application_deadline?: string | null
          category?: string | null
          client_id?: string | null
          content?: string | null
          created_at?: string
          experience_level?: string | null
          id?: number
          is_active?: boolean | null
          job_type?: string | null
          location?: string | null
          posted_at?: string | null
          remote_allowed?: boolean | null
          salary_max?: number | null
          salary_min?: number | null
          salary_range?: string | null
          search_string?: string | null
          skills_required?: string[] | null
          source?: string | null
          summary?: string | null
          tags?: string[] | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      kickoff_calls: {
        Row: {
          action_items: string[] | null
          content: string | null
          created_at: string
          file_paths: string[] | null
          id: number
          key_points: string[] | null
          summary: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          action_items?: string[] | null
          content?: string | null
          created_at?: string
          file_paths?: string[] | null
          id?: number
          key_points?: string[] | null
          summary?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          action_items?: string[] | null
          content?: string | null
          created_at?: string
          file_paths?: string[] | null
          id?: number
          key_points?: string[] | null
          summary?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      kickoff_summaries: {
        Row: {
          call_id: number | null
          content: string
          created_at: string
          id: number
          source: string
          sources: string[] | null
          user_id: string
        }
        Insert: {
          call_id?: number | null
          content: string
          created_at?: string
          id?: number
          source: string
          sources?: string[] | null
          user_id: string
        }
        Update: {
          call_id?: number | null
          content?: string
          created_at?: string
          id?: number
          source?: string
          sources?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "kickoff_summaries_call_id_fkey"
            columns: ["call_id"]
            isOneToOne: false
            referencedRelation: "kickoff_calls"
            referencedColumns: ["id"]
          },
        ]
      }
      lead_activities: {
        Row: {
          activity_type: string
          created_at: string
          created_by: string | null
          details: string | null
          id: string
          lead_id: string
        }
        Insert: {
          activity_type: string
          created_at?: string
          created_by?: string | null
          details?: string | null
          id?: string
          lead_id: string
        }
        Update: {
          activity_type?: string
          created_at?: string
          created_by?: string | null
          details?: string | null
          id?: string
          lead_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lead_activities_lead_id_fkey"
            columns: ["lead_id"]
            isOneToOne: false
            referencedRelation: "leads"
            referencedColumns: ["id"]
          },
        ]
      }
      leads: {
        Row: {
          assigned_to: string | null
          company: string
          created_at: string
          email: string
          id: string
          industry: string
          message: string
          name: string
          phone: string | null
          preferred_contact: string
          status: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          company: string
          created_at?: string
          email: string
          id?: string
          industry: string
          message: string
          name: string
          phone?: string | null
          preferred_contact: string
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          company?: string
          created_at?: string
          email?: string
          id?: string
          industry?: string
          message?: string
          name?: string
          phone?: string | null
          preferred_contact?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      meeting_analyses: {
        Row: {
          analysis: string
          created_at: string | null
          id: number
          processed_at: string
          recording_id: string
          video_url: string
        }
        Insert: {
          analysis: string
          created_at?: string | null
          id?: never
          processed_at?: string
          recording_id: string
          video_url: string
        }
        Update: {
          analysis?: string
          created_at?: string | null
          id?: never
          processed_at?: string
          recording_id?: string
          video_url?: string
        }
        Relationships: []
      }
      meetings: {
        Row: {
          created_at: string | null
          end_time: string | null
          id: number
          meeting_date: string
          participants: Json | null
          start_time: string
          summary: string | null
          transcription: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          end_time?: string | null
          id?: number
          meeting_date?: string
          participants?: Json | null
          start_time: string
          summary?: string | null
          transcription?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          end_time?: string | null
          id?: number
          meeting_date?: string
          participants?: Json | null
          start_time?: string
          summary?: string | null
          transcription?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          body: string | null
          id: string
          report_id: string | null
          sender: string | null
          ts: string | null
        }
        Insert: {
          body?: string | null
          id?: string
          report_id?: string | null
          sender?: string | null
          ts?: string | null
        }
        Update: {
          body?: string | null
          id?: string
          report_id?: string | null
          sender?: string | null
          ts?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "production_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      parsed_documents: {
        Row: {
          created_at: string | null
          file_path: string | null
          id: number
          original_filename: string | null
          parsed_text: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          file_path?: string | null
          id?: number
          original_filename?: string | null
          parsed_text?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          file_path?: string | null
          id?: number
          original_filename?: string | null
          parsed_text?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      production_reports: {
        Row: {
          crew_call: string | null
          crew_count: number | null
          id: string
          inserted_at: string | null
          notes: string | null
          project_id: string | null
          project_name: string | null
          raw_ai: Json | null
          scenes_int: number | null
          shoot_date: string | null
          status: string | null
          user_id: string | null
          wrap_time: string | null
        }
        Insert: {
          crew_call?: string | null
          crew_count?: number | null
          id?: string
          inserted_at?: string | null
          notes?: string | null
          project_id?: string | null
          project_name?: string | null
          raw_ai?: Json | null
          scenes_int?: number | null
          shoot_date?: string | null
          status?: string | null
          user_id?: string | null
          wrap_time?: string | null
        }
        Update: {
          crew_call?: string | null
          crew_count?: number | null
          id?: string
          inserted_at?: string | null
          notes?: string | null
          project_id?: string | null
          project_name?: string | null
          raw_ai?: Json | null
          scenes_int?: number | null
          shoot_date?: string | null
          status?: string | null
          user_id?: string | null
          wrap_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "production_reports_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          id: string
          phone_number: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          phone_number?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          phone_number?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resume_matches: {
        Row: {
          created_at: string | null
          id: number
          job_id: number | null
          matching_entities: Json | null
          matching_keywords: Json | null
          parsed_job: Json | null
          parsed_resume: Json | null
          resume_file_path: string | null
          resume_text: string | null
          similarity_score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: never
          job_id?: number | null
          matching_entities?: Json | null
          matching_keywords?: Json | null
          parsed_job?: Json | null
          parsed_resume?: Json | null
          resume_file_path?: string | null
          resume_text?: string | null
          similarity_score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: never
          job_id?: number | null
          matching_entities?: Json | null
          matching_keywords?: Json | null
          parsed_job?: Json | null
          parsed_resume?: Json | null
          resume_file_path?: string | null
          resume_text?: string | null
          similarity_score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resume_matches_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      search_results: {
        Row: {
          created_at: string | null
          id: number
          job_id: number | null
          profile_location: string | null
          profile_name: string | null
          profile_title: string | null
          profile_url: string | null
          relevance_score: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          job_id?: number | null
          profile_location?: string | null
          profile_name?: string | null
          profile_title?: string | null
          profile_url?: string | null
          relevance_score?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          job_id?: number | null
          profile_location?: string | null
          profile_name?: string | null
          profile_title?: string | null
          profile_url?: string | null
          relevance_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "search_results_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      sourcing_searches: {
        Row: {
          company_name: string | null
          created_at: string | null
          id: number
          search_string: string | null
          search_text: string | null
          search_type: string | null
          user_id: string | null
        }
        Insert: {
          company_name?: string | null
          created_at?: string | null
          id?: number
          search_string?: string | null
          search_text?: string | null
          search_type?: string | null
          user_id?: string | null
        }
        Update: {
          company_name?: string | null
          created_at?: string | null
          id?: number
          search_string?: string | null
          search_text?: string | null
          search_type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_video_analyses: {
        Row: {
          analysis_prompt: string
          analysis_result: string | null
          created_at: string | null
          id: number
          status: string | null
          user_id: string | null
          video_name: string
          video_url: string
        }
        Insert: {
          analysis_prompt: string
          analysis_result?: string | null
          created_at?: string | null
          id?: number
          status?: string | null
          user_id?: string | null
          video_name: string
          video_url: string
        }
        Update: {
          analysis_prompt?: string
          analysis_result?: string | null
          created_at?: string | null
          id?: number
          status?: string | null
          user_id?: string | null
          video_name?: string
          video_url?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          id: string
          name: string | null
          phone: string
          role: string | null
        }
        Insert: {
          id?: string
          name?: string | null
          phone: string
          role?: string | null
        }
        Update: {
          id?: string
          name?: string | null
          phone?: string
          role?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
